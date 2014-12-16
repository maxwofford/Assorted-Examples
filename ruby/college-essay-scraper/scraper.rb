require 'nokogiri'
require 'open-uri'
require 'json'
require './websites'

# This module is for converting our data to a json file
module DataExporter
  class << self

    # We take in a hash and output json
    def data_to_json(data)
      return JSON.pretty_generate(data)
    end

    # We output our json to output.json
    def export_data(json)
      output = File.open('output.json', 'w')
      output << json
      return true
    end
  end
end

# Example usage:
# DataExporter.export_data(DataExporter.data_to_json(WebsiteScraper.scrape_all))
