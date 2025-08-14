#!/bin/bash

# A script to create a new MkDocs project with a custom theme directory.
# Usage: ./create_theme.sh <your-project-name>

# Check if a project name was provided
if [ -z "$1" ]; then
  echo "Error: Please provide a project name."
  echo "Usage: ./create_theme.sh <your-project-name>"
  exit 1
fi

PROJECT_NAME=$1
THEME_DIR="theme"

# Create the main project directory and navigate into it
if [ -d "$PROJECT_NAME" ]; then
  echo "Error: Directory '$PROJECT_NAME' already exists."
  exit 1
fi

mkdir "$PROJECT_NAME"
echo "Created project directory: '$PROJECT_NAME'"
cd "$PROJECT_NAME"

# Create the necessary directories
mkdir -p docs "$THEME_DIR"/{css,js,img}
echo "Created 'docs', 'theme', and its subdirectories."

# Create the mkdocs.yml file
cat <<EOF > mkdocs.yml
site_name: $(echo "$PROJECT_NAME" | sed 's/-/ /g' | sed 's/\b./\u&/g')
site_author: Your Name

nav:
    - Home: index.md

theme:
    name: null
    custom_dir: $THEME_DIR/

markdown_extensions:
    - toc:
        permalink: true
EOF
echo "Created 'mkdocs.yml' configuration file."

# Create the main.html template
cat <<EOF > "$THEME_DIR/main.html"
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>{{ page.title }} | {{ config.site_name }}</title>
    <link rel="stylesheet" href="{{ url('css/main.css') }}">
</head>
<body>
    <header>
        <h1>{{ config.site_name }}</h1>
        <nav>
            {% for nav_item in nav %}
                <a href="{{ nav_item.url | url }}">{{ nav_item.title }}</a>
            {% endfor %}
        </nav>
    </header>

    <main>
        {{ page.content }}
    </main>

    <footer>
        <p>Powered by MkDocs</p>
    </footer>

    <script src="{{ url('js/main.js') }}"></script>
</body>
</html>
EOF
echo "Created 'theme/main.html' template file."

# Create a placeholder CSS file
cat <<EOF > "$THEME_DIR/css/main.css"
/* Your custom theme styles go here */
body {
    font-family: sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 20px;
    background-color: #f4f4f4;
    color: #333;
}

header {
    background-color: #333;
    color: #fff;
    padding: 1rem;
    text-align: center;
}

header h1 {
    margin: 0;
}

nav a {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
}

main {
    max-width: 900px;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
EOF
echo "Created 'theme/css/main.css' stylesheet."

# Create a placeholder JavaScript file
echo "// Your custom theme scripts go here" > "$THEME_DIR/js/main.js"
echo "Created 'theme/js/main.js' script file."

# Create an initial Markdown file
cat <<EOF > docs/index.md
# Welcome to My Awesome Docs

This is your home page!
EOF
echo "Created initial 'docs/index.md' file."

echo ""
echo "Setup complete! You can now navigate to your new project directory."
echo "To view your project, run 'mkdocs serve' inside the '$PROJECT_NAME' directory."

