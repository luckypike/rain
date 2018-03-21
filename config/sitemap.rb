# Set the host name for URL creation
SitemapGenerator::Sitemap.default_host = "https://irinarain.com"

SitemapGenerator::Sitemap.create(compress: false, include_root: false) do
  [nil, :nizhny].each do |city|
    add root_path(city: city)
    add about_path(city: city)
    add team_path(city: city)
    add career_path(city: city)
  end
end
