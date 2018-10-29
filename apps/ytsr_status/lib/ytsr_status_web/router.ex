defmodule YtsrStatusWeb.Router do
  use YtsrStatusWeb, :router

  pipeline :browser do
    plug(:accepts, ["html"])
    plug(:fetch_session)
    plug(:fetch_flash)
    plug(:protect_from_forgery)
    plug(:put_secure_browser_headers)
  end

  pipeline :api do
    plug(:accepts, ["json"])
  end

  scope "/", YtsrStatusWeb do
    # Use the default browser stack
    pipe_through(:browser)

    get("/", PageController, :index)
  end

  # Other scopes may use custom stacks.
  # scope "/api", YtsrStatusWeb do
  #   pipe_through :api
  # end

  scope "/api", YtsrStatus do
    pipe_through(:api)

    scope "/v1" do
      get("/status", StatusController, :index)
    end
  end
end
