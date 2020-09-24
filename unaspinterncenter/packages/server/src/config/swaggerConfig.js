module.exports = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'UNASP INTERN CENTER',
    description: 'UNASP intern center api documentation',
    termsOfService: 'http://api_url/terms/'
    // contact: {
    //   name: 'Wolox Team',
    //   email: 'hello@wolox.co',
    //   url: 'https://www.wolox.com.ar/'
    // },
    // license: {
    //   name: 'Apache 2.0',
    //   url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
    // }
  },
  /* ... */
  servers: [
    {
      url: 'http://localhost:3000/',
      description: 'Local server'
    },
    {
      url: 'https://api_url_testing',
      description: 'Testing server'
    },
    {
      url: 'https://api_url_production',
      description: 'Production server'
    }
  ],
  tags: [
    {
      name: 'users'
    }
  ],
  paths: {
    '/users': {
      post: {
        tags: ['users'],
        description: 'Register users',
        operationId: 'store',
        parameters: [
          {
            name: 'user',
            in: 'body',
            schema: {
              $ref: '#/components/schemas/User'
            },
            required: true,
            description: 'The user to create'
          }
        ],
        responses: {
          201: {
            description: 'The user was created',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User'
                }
              }
            }
          },
          400: {
            description: 'Missing parameters',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error'
                },
                example: {
                  message: 'companyId is missing',
                  internal_code: 'missing_parameters'
                }
              }
            }
          }
        }
      }
    },
    '/auth': {
      post: {
        tags: ['users'],
        description: 'authenticate users',
        operationId: 'store',
        parameters: [
          {
            name: 'email',
            in: 'body',
            schema: {
              $ref: '#/components/schemas/email'
            },
            required: true
          },
          {
            name: 'password',
            in: 'body',
            schema: {
              $ref: '#/components/schemas/password'
            },
            required: true
          }
        ],
        responses: {
          201: {
            description: 'The user was created',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User'
                }
              }
            }
          },
          400: {
            description: 'Missing parameters',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error'
                },
                example: {
                  message: 'companyId is missing',
                  internal_code: 'missing_parameters'
                }
              }
            }
          }
        }
      }
    }
  },
  components: {
    schemas: {
      ra: {
        type: 'integer',
        description: 'User identification number',
        example: 65741
      },
      id_course: {
        type: 'integer',
        description: 'ID of the course',
        example: '12'
      },
      name: {
        type: 'string',
        description: 'User full name',
        example: 'Albert Randerbeg'
      },
      email: {
        type: 'string',
        description: 'User email',
        example: 'albert@outlook.com'
      },
      password: {
        type: 'string',
        description: 'The password to have access'
      },
      User: {
        type: 'object',
        properties: {
          ra: {
            $ref: '#/components/schemas/ra'
          },
          id_course: {
            $ref: '#/components/schemas/id_course'
          },
          name: {
            $ref: '#/components/schemas/name'
          },
          email: {
            $ref: '#/components/schemas/email'
          },
          password: {
            $ref: '#/components/schemas/password'
          }
        }
      },
      Users: {
        type: 'object',
        properties: {
          users: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/User'
            }
          }
        }
      },
      Error: {
        type: 'object',
        properties: {
          message: {
            type: 'string'
          },
          internal_code: {
            type: 'string'
          }
        }
      }
    }
  }
}
