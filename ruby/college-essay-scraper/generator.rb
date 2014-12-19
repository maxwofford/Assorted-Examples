require 'marky_markov'
require 'gingerice'
require 'json'
require './scraper'
require 'pry'

# Start scraping essays
DataExporter.export_data(DataExporter.data_to_json(WebsiteScraper.scrape_all))

input = File.read('./output.json')
input_hash = JSON.parse(input)
essay_text = ''
input_hash.each do |input_essay|
  essay_text << input_essay.values.first
end

# Set up out temporary dictionary
markov = MarkyMarkov::Dictionary.new('dictionary', 3)
markov.parse_string essay_text
# 650 word limit on the common app
output = markov.generate_n_words 650
# Clear the temporary dictionary.
markov.clear!

# Clean up our output's grammar and spelling with gingerice
parser = Gingerice::Parser.new
# Warning: We're putting in a string, but Gingerice outputs an object
output = parser.parse output
puts output['text']

MarkyMarkov::Dictionary.delete_dictionary!(markov)
