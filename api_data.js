define({ "api": [
  {
    "type": "post",
    "url": "/admin/login",
    "title": "Admin Login",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Login",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Login successfully\",\n    \"data\": {\n        \"admin\": {\n            \"id\": 3\n            \"email\": \"amit@ksk.com\",\n            \"country_code\": \"+91\",\n            \"mobile_number\": \"90******99\",\n            \"created_at\": \"2020-08-17 19:58:42\",\n            \"updated_at\": \"2020-08-17 19:58:42\",\n        },\n        \"accessToken\": {\n            \"type\": \"bearer\",\n            \"token\": \"eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA\",\n            \"refreshToken\": null\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Invalid credentials\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AdminController.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/logout",
    "title": "Application Logout",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  'accept-language': 'ar',\n  'app-version': '1.0.0',\n  'authorization': 'Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA'\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "name": "Logout",
    "group": "Admin",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Logout successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Unauthorized\n{\n  \"message\": \"Invalid auth token\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AdminController.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/faq",
    "title": "Frequently Asked Questions",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "FAQ",
    "group": "App",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    <p>FREQUENTLY ASKED QUESTIONS</p>\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AuthController.js",
    "groupTitle": "App"
  },
  {
    "type": "get",
    "url": "/help",
    "title": "Help",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Help",
    "group": "App",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    <p>HAPPY TO HELP</p>\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AuthController.js",
    "groupTitle": "App"
  },
  {
    "type": "get",
    "url": "/terms-conditions",
    "title": "Terms and Conditions",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "TAC",
    "group": "App",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    <p>TERMS AND CONDITIONS</p>\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AuthController.js",
    "groupTitle": "App"
  },
  {
    "type": "post",
    "url": "/auth/create_blockchain_address",
    "title": "Create BlockChain Address",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "name": "CreateBCAddress",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_passphrase",
            "description": "<p>BlockChain passphrase.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_passphrase_encrypted",
            "description": "<p>BlockChain passphrase encrypted.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"user\": {\n        \"uid\": fa3e3c91-df2e-477e-8e59-03d679688ff5,\n        \"first_name\": John,\n        \"family_name\": Doe,\n        .\n        .\n        .\n        .\n        \"mobile_number\": \"90******99\",\n        \"device_type\": \"android\",\n        \"timestamp\": 1597674522004,\n        \"created_at\": \"2020-08-17 19:58:42\",\n        \"updated_at\": \"2020-08-17 19:58:42\",\n        \"id\": 3\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\nHTTP/1.1 400 Bad Request\n{\n  \"message\": \"Something went wrong in creating block chain address\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AuthController.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/forgot_password",
    "title": "Forgot Password",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "ForgotPassword",
    "group": "Auth",
    "description": "<p>This API sends an OTP on registered mobile number to reset password.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile_number",
            "description": "<p>Mobile Number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_code",
            "description": "<p>National Code.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"resetUid\": \"fa3e3c91-df2e-477e-8e59-03d679688ff5\",\n    \"message\": \"OTP sent successfully\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"OTP not sent\",\n}\n\nHTTP/1.1 401 Unauthorized\n{\n  \"message\": \"User does not exist\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AuthController.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Application Login",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Id",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "name": "Login",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_code",
            "description": "<p>Country Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile_number",
            "description": "<p>Mobile Number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Login successfully\",\n    \"data\": {\n        \"user\": {\n            \"uid\": fa3e3c91-df2e-477e-8e59-03d679688ff5,\n            \"first_name\": John,\n            \"father_name\": John Father,\n            \"grandfather_name\": John Grand Father,\n            \"family_name\": Doe,\n            .\n            .\n            .\n            .\n            \"mobile_number\": \"90******99\",\n            \"device_type\": \"android\",\n            \"timestamp\": 1597674522004,\n            \"created_at\": \"2020-08-17 19:58:42\",\n            \"updated_at\": \"2020-08-17 19:58:42\",\n            \"id\": 3\n        },\n        \"accessToken\": {\n            \"type\": \"bearer\",\n            \"token\": \"eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA\",\n            \"refreshToken\": null\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Invalid credentials\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AuthController.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/logout",
    "title": "Application Logout",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  'accept-language': 'ar',\n  'app-version': '1.0.0',\n  'authorization': 'Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA'\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "name": "Logout",
    "group": "Auth",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Logout successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Unauthorized\n{\n  \"message\": \"Invalid auth token\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AuthController.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth/nationalities",
    "title": "Get Nationalitites",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Nationalitites",
    "group": "Auth",
    "description": "<p>To get the list of Arab Nationalities.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": [\n         {\n             \"id\": 1,\n             \"name\": \"Jordan\",\n             \"code\": \"+962\"\n         },\n         {\n             \"id\": 2,\n             \"name\": \"Egypt\",\n             \"code\": \"+20\"\n         },\n         .\n         .\n         .\n         .\n         {\n             \"id\": 21,\n             \"name\": \"Comoros\",\n             \"code\": \"+269\"\n         }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AuthController.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/register",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Id",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "name": "Register",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>First Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "family_name",
            "description": "<p>Family Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email.</p>"
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
            "field": "confirm_password",
            "description": "<p>Confirm Password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otpUid",
            "description": "<p>otpUid of OTP verification.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Register successfully\",\n    \"data\": {\n        \"user\": {\n            \"uid\": fa3e3c91-df2e-477e-8e59-03d679688ff5,\n            \"first_name\": John,\n            \"family_name\": Doe,\n            .\n            .\n            .\n            .\n            \"mobile_number\": \"90******99\",\n            \"device_type\": \"android\",\n            \"timestamp\": 1597674522004,\n            \"created_at\": \"2020-08-17 19:58:42\",\n            \"updated_at\": \"2020-08-17 19:58:42\",\n            \"id\": 3\n        },\n        \"accessToken\": {\n            \"type\": \"bearer\",\n            \"token\": \"eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA\",\n            \"refreshToken\": null\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"User already exist\",\n}\n\nHTTP/1.1 400 Bad Request\n{\n  \"message\": \"Passwords didn't match\",\n}\n\nHTTP/1.1 400 Bad Request\n{\n  \"message\": \"Password must be 7-15 characters long\",\n}\n\nHTTP/1.1 400 Bad Request\n{\n  \"message\": \"Invalid OTP\",\n}\n\nHTTP/1.1 400 Bad Request\n{\n  \"message\": \"Something went wrong in OTP verification, please try again after some time\",\n}\n\nHTTP/1.1 400 Bad Request\n{\n  \"message\": \"Something went wrong in registration, please try again\",\n}\n\nHTTP/1.1 604 OTP Expired\n{\n  \"message\": \"OTP expired, please try again\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AuthController.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/reset_password",
    "title": "Reset Password",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "ResetPassword",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otpSid",
            "description": "<p>OTP SID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_password",
            "description": "<p>New Password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirm_password",
            "description": "<p>Confirm Password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Password changed successfully\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Invalid OTP SID\",\n}\n\nHTTP/1.1 400 Bad Request\n{\n  \"message\": \"Passwords didn't match\",\n}\n\nHTTP/1.1 400 Bad Request\n{\n  \"message\": \"Password must be 7-15 characters long\",\n}\n\nHTTP/1.1 400 Bad Request\n{\n  \"message\": \"Something went wrong, please try again\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AuthController.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/send_otp_to_verify_number",
    "title": "Send OTP to verify phone number",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "name": "SendOTPToVerifyNumber",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile_number",
            "description": "<p>Mobile Number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_code",
            "description": "<p>National Code.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"otpSid\": \"VE9194732****************ab09b4bbe\",\n    \"message\": \"OTP sent successfully\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"User already exist\",\n}\n\nHTTP/1.1 400 Bad Request\n{\n  \"message\": \"OTP not sent\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AuthController.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/verify_device",
    "title": "Verify Device",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "name": "VerifyDevice",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile_number",
            "description": "<p>Mobile Number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_code",
            "description": "<p>National Code.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "otp",
            "description": "<p>4 digits OTP sent on phone.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"approved\",\n    \"message\": \"OTP checked successfully\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Something went wrong in OTP verification, please try again after some time\",\n}\n\nHTTP/1.1 604 OTP Expired\n{\n  \"message\": \"OTP expired, please try again\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AuthController.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/verify_encryption_pin",
    "title": "Verify Encryption Pin",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "VerifyEncryptionPin",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pin",
            "description": "<p>Encryption PIN</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>The action before which authentication required like View, Sign, Reject Document</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "docUid",
            "description": "<p>The document on which action will be performed</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"bcUid\":\"357cad92-da5f-43f4-91fe-6c7e27d1d835\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Invalid PIN\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AuthController.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/verify_otp_to_verify_number",
    "title": "Verify OTP to verify phone number",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "name": "VerifyOTPToVerifyNumber",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile_number",
            "description": "<p>Mobile Number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_code",
            "description": "<p>National Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "otp",
            "description": "<p>4 digits OTP sent on phone.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"otpUid\": \"fa3e3c91-df2e-477e-8e59-03d679688ff5\",\n    \"message\": \"OTP sent successfully\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"User already exist\",\n}\n\nHTTP/1.1 400 Bad Request\n{\n  \"message\": \"OTP not sent\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AuthController.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/verify_reset_password_otp",
    "title": "Verify Reset Password OTP",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "VerifyResetPasswordOtp",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resetUid",
            "description": "<p>Reset Password UID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "otp",
            "description": "<p>4 digits OTP sent on phone.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"otpSid\": \"VE9194732****************ab09b4bbe\",\n    \"message\": \"OTP verified\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Invalid OTP, please enter correct OTP\",\n}\n\nHTTP/1.1 400 Bad Request\n{\n  \"message\": \"Something went wrong in OTP verification, please try again after some time\",\n}\n\nHTTP/1.1 604 OTP Expired\n{\n  \"message\": \"OTP expired, please try again\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/AuthController.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/doc/add_signee",
    "title": "Add Signee",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "AddSignee",
    "group": "Doc",
    "description": "<p>Add Signee and it's order of signature.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "docUid",
            "description": "<p>Uid of document on which signee will sign.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "maintain_order",
            "description": "<p>Maintain Signee's sign order</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "hide_sign",
            "description": "<p>Hide signer's signature</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "signees",
            "description": "<p>Array of objects of Signees consists [name, email, country_code, mobile_number, order]</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"docUid\": \"a2f0c055-d5d3-443d-b519-2b51ee3c4e79\",\n  \"maintain_order\": true,\n  \"hide_sign\": false,\n  \"signees\":  [\n    {\n      \"id\": 1,\n      \"name\": \"John Doe\",\n      \"email\": \"john@doe.com\",\n      \"countryCode\": \"IN\",\n      \"country_code\": \"+91\",\n      \"mobile_number\": 90******99,\n      \"order\": 1,\n      \"timestamp\": 127353363\n    },\n    {\n      \"id\": 2,\n      \"name\": \"Amit Ksk\",\n      \"email\": \"amit@ksk.com\",\n      \"countryCode\": \"IN\",\n      \"country_code\": \"+91\",\n      \"mobile_number\": 90******99,\n      \"order\": 2,\n      \"timestamp\": 186682683\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Signees saved successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Document not found\",\n}\n\nHTTP/1.1 400 Bad Request\n{\n  \"message\": \"Signee not updated\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/DocController.js",
    "groupTitle": "Doc"
  },
  {
    "type": "post",
    "url": "/doc/add_signees_signature_position",
    "title": "Add Signee's Signature Position",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "AddSigneesSignsPosition",
    "group": "Doc",
    "description": "<p>Ambed Signee's signature positions and invite them to sign on it.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "docUid",
            "description": "<p>Uid of document on which signature will be appended.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "positions[]",
            "description": "<p>Array of objects of signature's positions</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "  {\n  \"docUid\": \"a2f0c055-d5d3-443d-b519-2b51ee3c4e79\",\n  \"allPages\": true,\n  \"positions\": [\n    {\n      \"signee_id\": 1,\n      \"page\": 2,\n      \"pageHeight\": 200,\n      \"pageWidth\": 120,\n      \"height\": 40,\n      \"width\": 70,\n      \"x\": 270,\n      \"y\": 560\n    },\n    {\n      \"signee_id\": 2,\n      \"page\": 3,\n      \"pageHeight\": 200,\n      \"pageWidth\": 120,\n      \"height\": 40,\n      \"width\": 70,\n      \"x\": 170,\n      \"y\": 410\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Positions added successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Document not found\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/DocController.js",
    "groupTitle": "Doc"
  },
  {
    "type": "post",
    "url": "/doc/add_signer_sign",
    "title": "Add Signer's Sign",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "AddSignerSign",
    "group": "Doc",
    "description": "<p>Save Signer's Signature and it's position in the doc.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "docUid",
            "description": "<p>Uid of document on which signature will be appended.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "base64Sign",
            "description": "<p>Signer's signature in base64 format.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page index of document</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageHeight",
            "description": "<p>Height of page</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageWidth",
            "description": "<p>Width of page</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "height",
            "description": "<p>Height of signature</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "width",
            "description": "<p>Width of signature</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "x",
            "description": "<p>Position x of signature</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "y",
            "description": "<p>Position y of signature</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extension",
            "description": "<p>Extension of Base64 Image</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"docUid\": \"a2f0c055-d5d3-443d-b519-2b51ee3c4e79\",\n  \"base64Sign\": \"data:image/png;base64,iVBORw0KGg.....\",\n  \"page\": 2,\n  \"pageHeight\": 200,\n  \"pageWidth\": 120,\n  \"page\": 2,\n  \"height\": 40,\n  \"width\": 70,\n  \"x\": 270,\n  \"y\": 560,\n  \"extension\": \"jpeg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Signature saved successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Document not found\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/DocController.js",
    "groupTitle": "Doc"
  },
  {
    "type": "put",
    "url": "/doc/approve_admin_access",
    "title": "Approve Admin Access for document",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "ApproveAdminAccess",
    "group": "Doc",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "docUid",
            "description": "<p>Uid of document.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"docUid\": \"a2f0c055-d5d3-443d-b519-2b51ee3c4e79\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"approved\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/DocController.js",
    "groupTitle": "Doc"
  },
  {
    "type": "put",
    "url": "/doc/approve_signee_access",
    "title": "Approve Signee Access for document",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "ApproveSigneeAccess",
    "group": "Doc",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "docUid",
            "description": "<p>Uid of document.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"docUid\": \"a2f0c055-d5d3-443d-b519-2b51ee3c4e79\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"approved\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/DocController.js",
    "groupTitle": "Doc"
  },
  {
    "type": "post",
    "url": "/doc/convert_to_pdf",
    "title": "Convert To PDF Document",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "ConvertToPDF",
    "group": "Doc",
    "description": "<p>Upload any file [image, doc] from Device OR base64 String and convert it to PDF.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>Any File of format given below.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "base64Str",
            "description": "<p>Base64 conversion of HTML.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mimeType",
            "description": "<p>mimeType of file as ['image/png', 'image/jpg', 'image/jpeg','application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword',   'html'].</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"s3Url\": \"https://tawqi3i.s3.ap-south-1.amazonaws.com/documents/doc-a2f0c055-d5d3-443d-b519-2b51ee3c4e79.pdf\"\n   \"message\": \"Document created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/DocController.js",
    "groupTitle": "Doc"
  },
  {
    "type": "post",
    "url": "/doc/create_document_base64",
    "title": "Create Document Base64",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "CreateDocumentBase64",
    "group": "Doc",
    "description": "<p>Converting document from Base64 to PDF.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "base64Str",
            "description": "<p>Base64 encoded URL of doc in string format.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "html",
            "description": "<p>HTML content of doc.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"doc\": {\n            \"id\": 26,\n            \"user_id\": 1,\n            \"name\": \"doc-a2f0c055-d5d3-443d-b519-2b51ee3c4e79.pdf\",\n            \"uid\": \"a2f0c055-d5d3-443d-b519-2b51ee3c4e79\",\n            \"url\": \"https://tawqi3i.s3.ap-south-1.amazonaws.com/documents/doc-a2f0c055-d5d3-443d-b519-2b51ee3c4e79.pdf\",\n            \"html\": \"<!DOCTYPE html>\n                     <html lang=\"en\">\n                      <head>\n                        <meta charset=\"UTF-8\" />\n                        <title>Tawqi3i</title>\n                      </head>\n                      <body>\n                      </body>\n                     </html>\",\n            \"status\": 0,\n            \"admin_access\": 0,\n            \"created_at\": \"2020-09-08 19:13:24\",\n            \"updated_at\": \"2020-09-08 19:13:24\"\n   },\n   \"message\": \"Document created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/DocController.js",
    "groupTitle": "Doc"
  },
  {
    "type": "post",
    "url": "/doc/delete_document",
    "title": "Delete a Document",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "DeleteDocument",
    "group": "Doc",
    "description": "<p>Delete a document which is not invited to sign yet.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "docUid",
            "description": "<p>Uid of document which will be deleted.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bcUid",
            "description": "<p>Uid of blockchain transaction to delete shared document.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"docUid\": \"a2f0c055-d5d3-443d-b519-2b51ee3c4e79\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Document deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/DocController.js",
    "groupTitle": "Doc"
  },
  {
    "type": "post",
    "url": "/doc/delete_signee",
    "title": "Delete Signee",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "DeleteSignee",
    "group": "Doc",
    "description": "<p>Delete Signee.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "signee_id",
            "description": "<p>id of Signee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "docUid",
            "description": "<p>Uid of document from which signee will be deleted.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Signee deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Something went wrong\",\n}\n\nHTTP/1.1 400 Bad Request\n{\n  \"message\": \"Signee not updated\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/DocController.js",
    "groupTitle": "Doc"
  },
  {
    "type": "put",
    "url": "/doc/deny_admin_access",
    "title": "Deny Admin Access for document",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "DenyAdminAccess",
    "group": "Doc",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "docUid",
            "description": "<p>Uid of document.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"docUid\": \"a2f0c055-d5d3-443d-b519-2b51ee3c4e79\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"denied\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/DocController.js",
    "groupTitle": "Doc"
  },
  {
    "type": "post",
    "url": "/doc/document_history",
    "title": "Get Document History",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "DocumentHistory",
    "group": "Doc",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "docUid",
            "description": "<p>Uid of document.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"docUid\": \"a2f0c055-d5d3-443d-b519-2b51ee3c4e79\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"history\": [\n        {\n           \"text\": \"Created at 11/5/2020 9:13 AM\",\n           \"status\": 2\n        },\n        {\n           \"text\": \"Signed by Siba Sankar at 11/4/2020 9:07 AM\",\n           \"status\": 2\n        },\n        {\n            \"status\": 2,\n            \"text\": \"Signed by Siba at 11/5/2020 9:15 AM\"\n        },\n        {\n            \"status\": 2,\n            \"text\": \"Signed by Hhj at 11/5/2020 9:15 AM\"\n        },\n        {\n            \"text\": \"Completed at 11/5/2020 9:17 AM\",\n            \"status\": 4\n        }\n    ],\n    \"total_dots\": 5,\n    \"grey_dots\": 0,\n    \"green_dots\": 5,\n    \"red_dots\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/DocController.js",
    "groupTitle": "Doc"
  },
  {
    "type": "get",
    "url": "/doc/documents",
    "title": "Get Documents List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "DocumentList",
    "group": "Doc",
    "description": "<p>To get the list of all documents.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": [\n        {\n            \"id\": 26,\n            \"user_id\": 1,\n            \"name\": \"doc-a2f0c055-d5d3-443d-b519-2b51ee3c4e79.pdf\",\n            \"uid\": \"a2f0c055-d5d3-443d-b519-2b51ee3c4e79\",\n            \"url\": \"https://tawqi3i.s3.ap-south-1.amazonaws.com/documents/doc-a2f0c055-d5d3-443d-b519-2b51ee3c4e79.pdf\",\n            \"status\": 0,\n            \"admin_access\": 0,\n            \"created_at\": \"2020-09-08 19:13:24\",\n            \"updated_at\": \"2020-09-08 19:13:24\",\n            \"signer_id\": 7,\n            \"signer_signatures\": [\n               {\n                   \"page\": 1,\n                   \"x\": 55.07,\n                   \"y\": 390.96,\n                   \"height\": 85.79,\n                   \"width\": 86.47,\n                   \"sign\": \"https://tawqi3i.s3.ap-south-1.amazonaws.com/signatures/doc-signer-signa5275c5d-73b0-4584-aa6b-358816579015.png\",\n                   \"at_all_pages\": 0\n               }\n            ],\n            \"signee_id\": 16,\n            \"signee_signatures_locations\": [\n               {\n                   \"page\": 1,\n                   \"x\": 55.07,\n                   \"y\": 390.96,\n                   \"height\": 85.79,\n                   \"width\": 86.47,\n                   \"sign\": \"https://tawqi3i.s3.ap-south-1.amazonaws.com/signatures/doc-signer-signa5275c5d-73b0-4584-aa6b-358816579015.png\",\n                   \"at_all_pages\": 0\n               },\n               {\n                   \"page\": 2,\n                   \"x\": 35.07,\n                   \"y\": 690.96,\n                   \"height\": 85.79,\n                   \"width\": 86.47,\n                   \"sign\": \"https://tawqi3i.s3.ap-south-1.amazonaws.com/signatures/doc-signer-signa5275c5d-73b0-4584-aa6b-358816579015.png\",\n                   \"at_all_pages\": 0\n               }\n            ]\n        },\n        {\n            \"id\": 26,\n            \"user_id\": 1,\n            \"name\": \"doc-a2f0c055-d5d3-443d-b519-2b51ee3c4e79.pdf\",\n            \"uid\": \"a2f0c055-d5d3-443d-b519-2b51ee3c4e79\",\n            \"url\": \"https://tawqi3i.s3.ap-south-1.amazonaws.com/documents/doc-a2f0c055-d5d3-443d-b519-2b51ee3c4e79.pdf\",\n            \"status\": 0,\n            \"admin_access\": 0,\n            \"created_at\": \"2020-09-08 19:13:24\",\n            \"updated_at\": \"2020-09-08 19:13:24\",\n            \"signer_id\": 7,\n            \"signer_signatures\": [\n               {\n                   \"page\": 1,\n                   \"x\": 55.07,\n                   \"y\": 390.96,\n                   \"height\": 85.79,\n                   \"width\": 86.47,\n                   \"sign\": \"https://tawqi3i.s3.ap-south-1.amazonaws.com/signatures/doc-signer-signa5275c5d-73b0-4584-aa6b-358816579015.png\",\n                   \"at_all_pages\": 0\n               }\n            ],\n            \"signee_id\": null,\n        },\n        {\n            \"id\": 25,\n            \"user_id\": 1,\n            \"name\": \"doc-97abb502-9933-4886-947a-281236c5388a.pdf\",\n            \"uid\": \"97abb502-9933-4886-947a-281236c5388a\",\n            \"url\": \"https://tawqi3i.s3.ap-south-1.amazonaws.com/documents/doc-97abb502-9933-4886-947a-281236c5388a.pdf\",\n            \"status\": 0,\n            \"admin_access\": 0,\n            \"created_at\": \"2020-09-08 18:45:31\",\n            \"updated_at\": \"2020-09-08 18:45:31\",\n            \"signer_id\": null,\n        },\n        .\n        .\n        .\n    ]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/DocController.js",
    "groupTitle": "Doc"
  },
  {
    "type": "post",
    "url": "/doc/document_status",
    "title": "Get Document Status",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "DocumentStatus",
    "group": "Doc",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "docUid",
            "description": "<p>Uid of document.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"docUid\": \"a2f0c055-d5d3-443d-b519-2b51ee3c4e79\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": 0\n   \"message\": \"Draft\"\n}\n\nHTTP/1.1 200 OK\n{\n   \"status\": 1\n   \"message\": \"Awaiting my/others parties signature\"\n}\n\nHTTP/1.1 200 OK\n{\n   \"status\": 2\n   \"message\": \"Approved\"\n}\n\nHTTP/1.1 200 OK\n{\n   \"status\": 3\n   \"message\": \"Rejected\"\n}\n\nHTTP/1.1 200 OK\n{\n   \"status\": 4\n   \"message\": \"Completed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/DocController.js",
    "groupTitle": "Doc"
  },
  {
    "type": "post",
    "url": "/doc/reject_document",
    "title": "Reject a Document",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "RejectDocument",
    "group": "Doc",
    "description": "<p>Decline to sign a document.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "docUid",
            "description": "<p>Uid of document which will be rejected.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"docUid\": \"a2f0c055-d5d3-443d-b519-2b51ee3c4e79\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Document rejected\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/DocController.js",
    "groupTitle": "Doc"
  },
  {
    "type": "post",
    "url": "/doc/rename_document",
    "title": "Rename a Document",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "RenameDocument",
    "group": "Doc",
    "description": "<p>Rename a document which is not invited to sign yet.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "docUid",
            "description": "<p>Uid of document.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "docName",
            "description": "<p>Uid of document.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"docUid\": \"a2f0c055-d5d3-443d-b519-2b51ee3c4e79\",\n    \"docName\": \"New Document Name\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Document renamed successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/DocController.js",
    "groupTitle": "Doc"
  },
  {
    "type": "post",
    "url": "/doc/save_as_document",
    "title": "Save as Document",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "SaveAsDocument",
    "group": "Doc",
    "description": "<p>Save as document a new document with new name.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "docUid",
            "description": "<p>Uid of document.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "docName",
            "description": "<p>Uid of document.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"docUid\": \"a2f0c055-d5d3-443d-b519-2b51ee3c4e79\",\n    \"docName\": \"New document name\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"doc\": {\n            \"id\": 36,\n            \"user_id\": 16,\n            \"name\": \"The document name\",\n            \"uid\": \"a2f0c055-d5d3-443d-b519-2b51ee3c4e79\",\n            \"url\": \"https://tawqi3i.s3.ap-south-1.amazonaws.com/documents/doc-a2f0c055-d5d3-443d-b519-2b51ee3c4e79.pdf\",\n            \"html\": \"<!DOCTYPE html>\n                     <html lang=\"en\">\n                      <head>\n                        <meta charset=\"UTF-8\" />\n                        <title>Tawqi3i</title>\n                      </head>\n                      <body>\n                      </body>\n                     </html>\",\n            \"status\": 0,\n            \"admin_access\": 0,\n            \"created_at\": \"2020-09-08 19:13:24\",\n            \"updated_at\": \"2020-09-08 19:13:24\"\n   },\n   \"message\": \"Document created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/DocController.js",
    "groupTitle": "Doc"
  },
  {
    "type": "post",
    "url": "/doc/sign_document",
    "title": "Sign a Document",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "SignDocument",
    "group": "Doc",
    "description": "<p>Ambed Sign image in a PDF.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "docUid",
            "description": "<p>Uid of document on which signature will be appended.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>Base64 String of signature of signee</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extension",
            "description": "<p>Extension of Base64 Image</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"docUid\": \"a2f0c055-d5d3-443d-b519-2b51ee3c4e79\",\n    \"sign\": \"data:image/png;base64,iVBORw0KGg.....\",\n    \"extension\": \"jpeg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Signature done successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/DocController.js",
    "groupTitle": "Doc"
  },
  {
    "type": "post",
    "url": "/doc/sign_document_base64",
    "title": "Sign Document Base64",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "SignDocumentBase64",
    "group": "Doc",
    "description": "<p>Signing document from Base64 to PDF.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "docUid",
            "description": "<p>Uid of document on which signature will be appended.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "base64Str",
            "description": "<p>Base64 encoded URL of PDF in string format.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"doc\": \"https://tawqi3i.s3.ap-south-1.amazonaws.com/documents/doc-a2f0c055-d5d3-443d-b519-2b51ee3c4e79.pdf\",\n   \"message\": \"Document created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/DocController.js",
    "groupTitle": "Doc"
  },
  {
    "type": "post",
    "url": "/doc/signees",
    "title": "Signees List",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "SigneeList",
    "group": "Doc",
    "description": "<p>To get the list of all Signees for a specific document.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "docUid",
            "description": "<p>Uid of document of which signees list required.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": [\n        {\n            \"id\": 1,\n            \"name\": \"John Doe\",\n            \"country_code\": \"+91\",\n            \"mobile_number\": \"90******99\",\n            \"email\": \"john@doe.com\",\n            \"user_id\": 11,\n            \"document_id\": 2,\n            \"order\": 1,\n            \"created_at\": \"2020-09-08 19:13:24\",\n            \"updated_at\": \"2020-09-08 19:13:24\"\n        },\n        {\n            \"id\": 2,\n            \"name\": \"Signee 2\",\n            \"country_code\": \"+91\",\n            \"mobile_number\": \"90******99\",\n            \"email\": \"signee@gmail.com\",\n            \"user_id\": 12,\n            \"document_id\": 2,\n            \"order\": 2,\n            \"created_at\": \"2020-09-08 18:45:31\",\n            \"updated_at\": \"2020-09-08 18:45:31\"\n        },\n        .\n        .\n        .\n    ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Document not found\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/DocController.js",
    "groupTitle": "Doc"
  },
  {
    "type": "post",
    "url": "/doc/update_document_base64",
    "title": "Update Document Base64",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "UpdateDocumentBase64",
    "group": "Doc",
    "description": "<p>Converting document from Base64 to PDF with updated content.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "base64Str",
            "description": "<p>Base64 encoded URL of doc in string format.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "html",
            "description": "<p>HTML content of doc.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "docUid",
            "description": "<p>Uid of document.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"doc\": {\n            \"id\": 26,\n            \"user_id\": 1,\n            \"name\": \"doc-a2f0c055-d5d3-443d-b519-2b51ee3c4e79.pdf\",\n            \"uid\": \"a2f0c055-d5d3-443d-b519-2b51ee3c4e79\",\n            \"url\": \"https://tawqi3i.s3.ap-south-1.amazonaws.com/documents/doc-a2f0c055-d5d3-443d-b519-2b51ee3c4e79.pdf\",\n            \"html\": \"<!DOCTYPE html>\n                     <html lang=\"en\">\n                      <head>\n                        <meta charset=\"UTF-8\" />\n                        <title>Tawqi3i</title>\n                      </head>\n                      <body>\n                      </body>\n                     </html>\",\n            \"status\": 0,\n            \"admin_access\": 0,\n            \"created_at\": \"2020-09-08 19:13:24\",\n            \"updated_at\": \"2020-09-08 19:13:24\"\n   },\n   \"message\": \"Document updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/DocController.js",
    "groupTitle": "Doc"
  },
  {
    "type": "post",
    "url": "/doc/upload_document",
    "title": "Upload Document",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "UploadDocument",
    "group": "Doc",
    "description": "<p>Upload any file [image, doc, pdf] from Device and convert it to PDF.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>Any File of format given below.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mimeType",
            "description": "<p>mimeType of file as ['png', 'jpg', 'jpeg', 'pdf', 'doc'].</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"doc\": {\n            \"id\": 26,\n            \"user_id\": 1,\n            \"name\": \"doc-a2f0c055-d5d3-443d-b519-2b51ee3c4e79.pdf\",\n            \"uid\": \"a2f0c055-d5d3-443d-b519-2b51ee3c4e79\",\n            \"url\": \"https://tawqi3i.s3.ap-south-1.amazonaws.com/documents/doc-a2f0c055-d5d3-443d-b519-2b51ee3c4e79.pdf\",\n            \"html\": null\n            \"status\": 0,\n            \"admin_access\": 0,\n            \"created_at\": \"2020-09-08 19:13:24\",\n            \"updated_at\": \"2020-09-08 19:13:24\"\n   },\n   \"message\": \"Document created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/DocController.js",
    "groupTitle": "Doc"
  },
  {
    "type": "post",
    "url": "/doc/upload_encrypted_document",
    "title": "Upload Encrypted Document",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "UploadEncryptedDocument",
    "group": "Doc",
    "description": "<p>Upload only PDF encrypted file from Device.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>Encrypted File.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "groupId",
            "description": "<p>This is group ID in the form of uuid string to create a unique group for document.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fileKey",
            "description": "<p>fileKey is the <code>encryptedFileKeyForGroup</code> of the file when ecrypted with group Id. It should be encrypted in base64 string with package <code>uint8-to-base64</code> to store in DB.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "docUid",
            "description": "<p>uid of document to update the document.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "html",
            "description": "<p>html content of document.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>name of document.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>description of document.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tags",
            "description": "<p>tags of document.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"doc\": {\n            \"id\": 26,\n            \"user_id\": 1,\n            \"name\": \"doc-a2f0c055-d5d3-443d-b519-2b51ee3c4e79.pdf\",\n            \"uid\": \"a2f0c055-d5d3-443d-b519-2b51ee3c4e79\",\n            \"url\": \"https://tawqi3i.s3.ap-south-1.amazonaws.com/documents/doc-a2f0c055-d5d3-443d-b519-2b51ee3c4e79.pdf\",\n            \"html\": null\n            \"status\": 0,\n            \"admin_access\": 0,\n            \"created_at\": \"2020-09-08 19:13:24\",\n            \"updated_at\": \"2020-09-08 19:13:24\"\n   },\n   \"message\": \"Document created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/DocController.js",
    "groupTitle": "Doc"
  },
  {
    "type": "get",
    "url": "/user/account",
    "title": "Get Account Details",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Account_Details",
    "group": "User",
    "description": "<p>To get the details of a User.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"data\": {\n       \"id\": 1,\n       \"uid\": \"fa3e3c91-df2e-477e-8e59-03d679688ff5\",\n       \"first_name\": \"Amit\",\n       \"father_name\": \"DP\",\n       \"grandfather_name\": \"JAN\",\n       \"family_name\": \"Kaushik\",\n       \"dob\": \"02-Nov-2018\",\n       \"gender\": 1,\n       \"email\": \"amit@ksk.com\",\n       \"mobile_number\": \"9034138099\",\n       \"country_id\": 1,\n       \"national_number\": \"+91\",\n       \"country_code\": \"+91\",\n       \"id_number\": \"FSQ2329K\",\n       \"id_image_front\": null,\n       \"id_image_back\": null,\n       \"profile_image\": null,\n       \"proof_type\": null,\n       \"proof_number\": null,\n       \"device_type\": \"android\",\n       \"bc_address\": \"0x105f035c097c5e12cb4e395512ee86e305052609\",\n       \"is_email_verified\": 0,\n       \"timestamp\": \"1597676275425\",\n       \"created_at\": \"2020-08-17 20:27:55\",\n       \"updated_at\": \"2020-08-21 17:38:13\"\n    }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/add_signature",
    "title": "Add Signature",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "name": "AddSignature",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "base64Sign",
            "description": "<p>Signer's signature in base64 format along with <code>extension</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "extension",
            "description": "<p>Extension of Base64 Image along with <code>base64Sign</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name for signature.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Signature saved successfully\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Something went wrong in OTP verification, please try again after some time\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/change_number_otp",
    "title": "Change Number OTP",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "ChangeNumberOtp",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile_number",
            "description": "<p>Mobile Number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_code",
            "description": "<p>National Code.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"otpSid\": \"VE9194732****************ab09b4bbe\",\n    \"message\": \"OTP sent successfully\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"OTP not sent\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/change_phone_number",
    "title": "Change Phone Number",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "ChangePhoneNumber",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile_number",
            "description": "<p>Mobile Number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_code",
            "description": "<p>National Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "otp",
            "description": "<p>4 digits OTP sent on phone.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Phone number updated\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Something went wrong in OTP verification, please try again after some time\",\n}\n\nHTTP/1.1 604 OTP Expired\n{\n  \"message\": \"OTP expired, please try again\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/user/clear_all_notifications",
    "title": "Clear All Notifications",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "name": "ClearAllNotifications",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Success\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Something went wrong\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/user/clear_notification",
    "title": "Clear Notification",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "name": "ClearNotification",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "notification_id",
            "description": "<p>id of Notification.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Success\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Something went wrong\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/user/delete_signature",
    "title": "Delete Signature",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "name": "DeleteSignature",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signUid",
            "description": "<p>uuid of signature.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Signature deleted successfully\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Something went wrong in OTP verification, please try again after some time\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/notification",
    "title": "Notification",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "Notification",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"notification_enabled\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/notifications",
    "title": "Notifications List",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "name": "NotificationsList",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": [\n         {\n             \"id\": 1,\n             \"data\": {},\n             \"notification\": {},\n             \"user_id\": 21,\n             \"is_read\": 0\n         },\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Something went wrong\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/set_primary_signature",
    "title": "Set Primary Signature",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "name": "PrimarySignature",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signUid",
            "description": "<p>uuid of signature.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Set as primary successfully\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Something went wrong, please try again after some time\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/read_notification",
    "title": "Read Notification",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "name": "ReadNotifications",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "notification_id",
            "description": "<p>id of Notification.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Success\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Something went wrong\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/notification",
    "title": "Set Notification",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "SetNotification",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"notification_enabled\": 1,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/signatures",
    "title": "Signatures List",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "name": "SignaturesList",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": [\n         {\n             \"id\": 1,\n             \"name\": \"Jordan\",\n             \"uid\": \"fa3e3c91-df2e-477e-8e59-03d679688ff5\",\n             \"user_id\": 21,\n             \"url\": \"https://tawqi3i.s3.ap-south-1.amazonaws.com/documents/doc-a2f0c055-d5d3-443d-b519-2b51ee3c4e79.pdf\",\n             \"primary\": \"+962\"\n         },\n         {\n             \"id\": 2,\n             \"name\": \"Egypt\",\n             \"uid\": \"fa3e3c91-df2e-477e-8e59-03d679688ff5\",\n             \"user_id\": 21,\n             \"url\": \"https://tawqi3i.s3.ap-south-1.amazonaws.com/documents/doc-a2f0c055-d5d3-443d-b519-2b51ee3c4e79.pdf\",\n             \"primary\": \"+962\"\n         },\n         .\n         .\n         .\n         .\n         {\n             \"id\": 21,\n             \"name\": \"Comoros\",\n             \"uid\": \"fa3e3c91-df2e-477e-8e59-03d679688ff5\",\n             \"user_id\": 21,\n             \"url\": \"https://tawqi3i.s3.ap-south-1.amazonaws.com/documents/doc-a2f0c055-d5d3-443d-b519-2b51ee3c4e79.pdf\",\n             \"primary\": \"+962\"\n         }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Something went wrong\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/account",
    "title": "Update Account",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "UpdateAccount",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Email ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "first_name",
            "description": "<p>First name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "family_name",
            "description": "<p>Family name of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"base64Sign\": \"data:image/png;base64,iVBORw0KGg.....\",\n   \"extension\": \"jpeg\",\n   \"email\": \"email@gmail.com\",\n   \"mobile_number\": 9034****99,\n   \"country_code\": \"+91\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Signature saved successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Something went wrong\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/update_signature",
    "title": "Update Signature",
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
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "version": "2.0.0",
    "name": "UpdateSignature",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signUid",
            "description": "<p>uuid of signature.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "base64Sign",
            "description": "<p>Signer's signature in base64 format along with <code>extension</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "extension",
            "description": "<p>Extension of Base64 Image along with <code>base64Sign</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Name for signature.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Signature saved successfully\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"message\": \"Something went wrong in OTP verification, please try again after some time\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/upsert/device-details",
    "title": "Upsert User Device Details",
    "description": "<p>Updates or inserts the device details of authenticated user in db</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version Code 1.0.0.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept-Language",
            "description": "<p>Language Code en OR ar.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer eyJhbGciOiJIUzI1NiI...............lREODosHjzx95uM-jA.</p>"
          }
        ]
      }
    },
    "name": "upsertUserDeviceDetails",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"ios\"",
              "\"android\""
            ],
            "optional": false,
            "field": "device_platform",
            "description": "<p>Mandatory device platform</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_os",
            "description": "<p>Mandatory device os details</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_unique_id",
            "description": "<p>Mandatory device unique id which can uniquely identify a device and does not change for a particular device</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fcm_token",
            "description": "<p>Mandatory FCM device token used for cloud messaging</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"device_platform\": \"android\",\n    \"device_os\": \"Android 10\",\n    \"device_unique_id\": \"wlknwkdnwkjdkjwdbwhdbwhjdbwdbwhdbwhdbjwhdbw\",\n    \"fcm_token\": \"wkdhbwhdbwhjdbwhjbdjmbejhfwjfej\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n[\n   {\n       \"message\": \"required validation failed on device_platform\",\n       \"field\": \"device_platform\",\n       \"validation\": \"required\"\n   },\n   {\n       \"message\": \"required validation failed on device_os\",\n       \"field\": \"device_os\",\n       \"validation\": \"required\"\n   },\n   {\n       \"message\": \"required validation failed on device_unique_id\",\n       \"field\": \"device_unique_id\",\n       \"validation\": \"required\"\n   },\n   {\n       \"message\": \"required validation failed on fcm_token\",\n       \"field\": \"fcm_token\",\n       \"validation\": \"required\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "app/Controllers/Http/UserController.js",
    "groupTitle": "User"
  }
] });
