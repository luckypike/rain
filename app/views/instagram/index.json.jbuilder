json.instagram(@media.select{ |m| m[:tags].include?('irinaraincom') }.first(4)) do |m|
  json.url m[:link]
  json.image m[:images][:standard_resolution][:url]
  json.likes m[:likes][:count]
  json.comments m[:comments][:count]
end
