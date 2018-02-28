source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.1'
gem 'sqlite3'
gem 'puma'

gem 'slim-rails'
gem 'inline_svg'

gem 'simple_form'
gem 'sass-rails'
gem 'autoprefixer-rails'
# gem 'uglifier'

gem 'carrierwave', '~> 1.0'
gem 'mini_magick'

gem 'rails-i18n'

gem 'capistrano'
gem 'capistrano-rails'
gem 'capistrano-passenger'
gem 'capistrano-rbenv'

gem 'meta-tags'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'rspec-rails'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
