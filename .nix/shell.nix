{ pkgs ? import <nixpkgs> { } }:
pkgs.mkShell rec {
  buildInputs = with pkgs; [ nodejs_latest curl gnumake ];
  CACHE_DIR = "$PWD/.cache";

  shellHook = ''
    export CACHE_DIR="${CACHE_DIR}"

    export PATH=$CACHE_DIR/bin:$PATH

    source $PWD/.nix/bin/init
  '';
}
