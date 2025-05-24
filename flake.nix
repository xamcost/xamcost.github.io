{
  description = "Development environment for Astro project";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
        nodejs = pkgs.nodejs_22;
      in {
        devShells.default = pkgs.mkShell {
          name = "astro-dev-shell";

          buildInputs = [ nodejs pkgs.nodePackages.npm ];

          shellHook = ''
            echo "Node.js version: $(node --version)"
            echo "npm version: $(npm --version)"
            echo "Installing dependencies..."
            npm install
          '';
        };
      });
}
