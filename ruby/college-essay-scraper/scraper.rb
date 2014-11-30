require 'nokogiri'
require 'open-uri'

base_url = "http://www.apstudynotes.org"
essay_list_url = "/essays"
output = File.open('output.json', 'w')
results = "{\"essays\": {\n"
essay_urls = []

Nokogiri::HTML(open(base_url + essay_list_url)).css('div.entry').each do |entry|
  url_addition = entry.css('a').first.attribute('href').value
  essay_urls.push(url_addition)
end

essay_urls.each do |url_addition|
  title = "\"#{url_addition.gsub('/',' ').gsub('-',' ').split.map(&:capitalize).join(' ')}\""
  paragraph = Nokogiri::HTML(open(base_url + url_addition)).css('body').first.css('p').text
  results << "#{title} : \"#{paragraph.gsub('"','\"').gsub("\n",'\n')}\",\n"
  puts "I just scraped #{title}"
end
results[0..-1]
results << "}\n}"
output << results
