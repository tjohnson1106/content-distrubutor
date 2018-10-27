# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :ytsr_status,
  namespace: YtsrStatus

# Configures the endpoint
config :ytsr_status, YtsrStatusWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "kiaGOCu+yeVg5O2ydVhjkqjWBzptMSmPcKhTGQJSCK6U0wys2otvMrzy/e34yr+r",
  render_errors: [view: YtsrStatusWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: YtsrStatus.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
