defmodule GoogleConfig do
  use Goth.Config

  def init(config) do
    {:ok, Keyword.put(config, :json, System.get_env("AIzaSyCotktIJpwxjKmbTkxdF9QTxZA39jFBnVM"))}
  end
end
