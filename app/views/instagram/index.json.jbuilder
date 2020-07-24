# .select { |m| m[:tags].include?('irinaraincom') }

json.instagram(@media.with_indifferent_access[:data].first(4)) do |m|
  json.extract! m, :id, :media_type, :media_url, :permalink
  # json.url m[:link]
  # json.image m[:images][:standard_resolution][:url]
  # json.likes m[:likes][:count]
  # json.comments m[:comments][:count]
end
