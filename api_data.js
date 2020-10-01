define({ "api": [
  {
    "type": "post",
    "url": "/api/register",
    "title": "Register",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Device Type ios/android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  'content-type': 'application/json',\n  'accept': 'application/json',\n  'app-version': '1.0.0',\n  'device-type': 'android'\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "name": "Register",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Full Name of User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>Confirm Password.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone Number.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Register successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n {\n     \"data\": {\n         \"phone\": [\n             \"The phone has already been taken.\"\n         ],\n         \"email\": [\n             \"The email has already been taken.\"\n         ]\n     }\n }\n\nHTTP/1.1 400 Bad Request\n {\n     \"data\": {\n         \"password\": [\n             \"The password must be at least 6 characters.\"\n         ]\n     }\n }\n\nHTTP/1.1 400 Bad Request\n {\n     \"data\": {\n         \"password\": [\n             \"The password confirmation does not match.\"\n         ]\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "../server/app/Http/Controllers/Auth/RegisterController.php",
    "groupTitle": "Auth"
  }
] });
