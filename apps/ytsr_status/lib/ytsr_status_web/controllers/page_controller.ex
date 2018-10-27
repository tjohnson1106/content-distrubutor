defmodule YtsrStatusWeb.PageController do
  use YtsrStatusWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
