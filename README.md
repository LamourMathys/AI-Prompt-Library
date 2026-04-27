# AI Prompt Library

A simple web application to store and browse AI prompts — built as part of a DevOps project.

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and **running**

## Getting Started

```bash
docker compose up -d --build
```

The application will be available at: **http://localhost:8080**

## Stopping the Application

```bash
docker compose down
```

## Rebuilding After Changes

If any file (HTML, CSS, JS) has been modified, rebuild the container:

```bash
docker compose down
docker compose up -d --build
```

## Project Structure

```
project/
├── index.html          # Main page
├── style.css           # Styles
├── app.js              # JavaScript logic
├── prompt.json         # Prompt data
├── Dockerfile          # Docker image definition
└── docker-compose.yml  # Container configuration
```

## Adding Prompts

Prompts are stored in `prompt.json`. Example:

```json
[
  {
    "title": "Prompt title",
    "category": "Category",
    "prompt": "Prompt text..."
  }
]
```

Prompts can also be added directly from the form on the page. Note that form submissions are not persisted — they will be lost on page reload.
