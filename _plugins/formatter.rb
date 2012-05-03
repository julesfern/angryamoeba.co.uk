module Jekyll
  module CustomFormatters
    def to_html5_datetime(date)      
      date.strftime("%Y-%m-%d")
    end
  end
end

Liquid::Template.register_filter(Jekyll::CustomFormatters)