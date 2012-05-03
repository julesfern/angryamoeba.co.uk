$(function() {
  
  /* ================================================================
  
                          DEPARTURE BOARDS
  
  ================================================================ */
  
  var buildDeparture = function($d) {
    // $d departure (li), 
    
    var $b = $(".progress", $d);
    var progress = $b.attr("data-progress");
    var complete = (progress == "100%");
    
    if(complete) $d.addClass("complete");
    $b.css("width", 0);
    $b.animate({width: $b.attr("data-progress")}, 500, function() {
      // On complete
      $d.addClass("build-complete");
      
      var $dn = $d.next();
      if(!$dn || $dn.length == 0) return;
      else buildDeparture($dn);
    });
  };
  buildDeparture($(".departures li").first());
  
  // Bind all links referencing departure boards
  // They will goto+animate the departure board
  $(".departures").each(function() {
    var $section = $(this),
        id = $section.attr("id"),
        href = "#"+id;
    
    $("a[href='"+href+"']").click(function() {
        var bD = function() {
          buildDeparture($("li", $section).first());
        };
      
        if($section.css("display") == "block") bD();
        else $section.slideDown(300, bD);
        return false;
    });    
  });
  
  
  
  /* ================================================================
  
                              BLOG SEARCH
  
  ================================================================ */
  
  var $archive = $("section.archives"),
      $archiveSearch = $("form.archive-search", $archive),
      $archiveSearchReset = $('<a href="#archives" class="reset">X</a>', $archive),
      $archivePosts = $("article", $archive),
      $pagination = $(".pagination"),
      $noResults = $('<article class="search-result no-results">No results.</article>');
  
  var loadSearchDigest = function(callback) {
    $archive.addClass("search-loading");
    $.getJSON("/posts.json", function(data, status) {
      window.searchDigest = data;
      $archive.removeClass("search-loading");
      if(callback) callback();
    });
  };
  
  var searchPosts = function(term) {
    if(term.length == 0 || term.match(/^\s+$/)) return searchReset();
    if(window.searchDigest) {
      // Run actual search operation
      var results = $.grep(window.searchDigest, function(item, index) {
        var queryWords = term.split(" ");
        var dataWords = item["keyword_digest"].join(" ").toLowerCase();
        // Perform joint set
        for(var qI in queryWords) {
          var qW = queryWords[qI].toLowerCase();
          if(dataWords.indexOf(qW) >= 0) {
            return true;
          }
        }
        return false;
      }).reverse();
      
      // Render
      // 1. Flush posts from archive
      $archivePosts.hide();
      // 2. Flush previous search results
      $("article.search-result", $archive).remove();
      // 3. Label results section
      var $h1 = $("h1", $archive);
      if(!$h1.attr("data-orig")) $h1.attr("data-orig", $h1.html());
      $h1.html("Results for '"+term+"'");
      // 4. Hide paginator
      $pagination.hide();
      // 5. Render posts into archive
      if(results.length == 0) {
        $archive.append($noResults);
      }
      else {
        $.each(results, function(index, item) {
          var html = item["search_html"];
          var jqHtml = $(html);
              jqHtml.addClass("search-result");
          $archive.append(jqHtml);
        });
      }
      // 5. Set section state
      $archive.addClass("search-active");
    }
    else {
      // Load data and requeue
      loadSearchDigest(function() { searchPosts(term) });
    }
  };
  
  var searchReset = function() {
    // 1. Flush posts from archive
    $archivePosts.show();
    // 2. Flush previous search results
    $("article.search-result", $archive).remove();
    // 3. Unlabel results section
    var $h1 = $("h1", $archive);
    if($h1.attr("data-orig")) {
      $h1.html($h1.attr("data-orig"));
      $h1.removeAttr("data-orig");
    }
    // 4. Show paginator
    $pagination.show();
    // 5. Reset section state
    $archive.removeClass("search-active");
  };
  
  // Inject reset button
  $("fieldset", $archiveSearch).first().append($archiveSearchReset);
  // Set reset behaviour
  $archiveSearchReset.click(function() {
    searchReset();
    return false;
  });    
  // Inject search behaviour
  $archiveSearch.submit(function() {
    searchPosts($(".text", $(this)).val());
    return false;
  });
  
  // Detect search params
  var query = document.location.search.substring(1),
      pairs = query.split("&");
  for(var i in pairs) {
    var pair = pairs[i].split("="),
        k = pair[0],
        v = unescape(pair[1]);
        
    if(k == "q" && v.length > 0) {
      searchPosts(v);
      $("body").scrollTop($archive.offset().top);
    }
  }
  
  
  
});