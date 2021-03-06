# config valid for current version and patch releases of Capistrano
lock "~> 3.10"

set :application, "rain"
set :repo_url, "git@github.com:luckypike/rain.git"

set :deploy_to, '/home/deploy/apps/irinarain.com'

set :ssh_options, { forward_agent: true }

append :linked_files, 'config/database.yml', 'config/master.key', 'db/production.sqlite3', 'config/credentials/production.key'
append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system", "public/uploads"

set :keep_releases, 5

after 'deploy:finishing', 'sitemap:create'

Rake::Task["deploy:assets:backup_manifest"].clear_actions
