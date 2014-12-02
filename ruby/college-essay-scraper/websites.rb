# This module is for website-specific instructions
module WebsiteScraper
  class << self
    # Scraping instructions for www.apstudynotes.org
    def scrape_apstudynotes
      base_url = "http://www.apstudynotes.org"
      essay_list_url = "/essays"
      essay_urls = []
      data = []

      Nokogiri::HTML(open(base_url + essay_list_url)).css('div.entry').each do |entry|
        url_addition = entry.css('a').first.attribute('href').value
        essay_urls.push(url_addition)
      end

      def get_paragraph(base_url, url_addition)
        base_url = "http://www.apstudynotes.org"
        title = "\"#{url_addition.gsub('/',' ').gsub('-',' ').split.map(&:capitalize).join(' ')}\""
        paragraph = Nokogiri::HTML(open(base_url + url_addition)).css('body').first.css('p').text.gsub(/Keep reading more(.*)/,'')
        result = {title => paragraph}
        puts "I just scraped #{title}"
        return result
      end
      essay_urls.each do |url_addition|
        data.push(get_paragraph(base_url, url_addition))
      end
      return data
    end

    # Run all the website-specific instructions
    def scrape_all
      data = scrape_apstudynotes()
      return data
    end
  end
end
