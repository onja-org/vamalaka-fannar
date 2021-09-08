{
	"info": {
		"_postman_id": "d7eedde3-c1cf-419b-825e-a7661ac41695",
		"name": "vamalaka qraphql",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "login user",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "graphql",
					"graphql": {
						"query": "mutation{login(username:\"skorek\" , password:\"aaaa\"){id, username,token}}",
						"variables": ""
					}
				},
				"url": {
					"raw": "http://localhost:4000/graphql",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"graphql"
					]
				}
			},
			"response": []
		},
		{
			"name": "register user",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "graphql",
					"graphql": {
						"query": "mutation{register(registerInput:{username:\"skorek\", password:\"aaaa\", confirmPassword:\"aaaa\",email:\"ja@me.com\", role:\"seller\"}){id,createdAt,email,username, token}}",
						"variables": ""
					}
				},
				"url": {
					"raw": "http://localhost:4000/graphql",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"graphql"
					]
				}
			},
			"response": []
		},
		{
			"name": "create ad",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjU2ZTA2ZTZjMjA2MDAyOTI2MDYzZCIsImVtYWlsIjoiamFAbWUuY29tIiwidXNlcm5hbWUiOiJza29yZWsiLCJpYXQiOjE2MjY3NjI3MTAsImV4cCI6MTYyNjc2NjMxMH0.oeZKtXlo4UypWgZUP9UD_PLwjC5nq8a7RYR5wqODt-o",
						"type": "text"
					}
				],
				"body": {
					"mode": "graphql",
					"graphql": {
						"query": "mutation{createAd(title:\"pepper3\", body:\"even more pepper\",photos:[{url:\"i4\", info:\"info of first\"}, {url:\"id\", isPrimary: true}]){id,title,photos{url,info,isPrimary},currency,price,amountOfProduct,username}}",
						"variables": ""
					}
				},
				"url": {
					"raw": "http://localhost:4000/graphql",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"graphql"
					]
				}
			},
			"response": []
		},
		{
			"name": "query ads",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjU2ZTA2ZTZjMjA2MDAyOTI2MDYzZCIsImVtYWlsIjoiamFAbWUuY29tIiwidXNlcm5hbWUiOiJza29yZWsiLCJpYXQiOjE2MjY3NjI3MTAsImV4cCI6MTYyNjc2NjMxMH0.oeZKtXlo4UypWgZUP9UD_PLwjC5nq8a7RYR5wqODt-o",
						"type": "text"
					}
				],
				"body": {
					"mode": "graphql",
					"graphql": {
						"query": "query{categories{id,title,description}}",
						"variables": ""
					}
				},
				"url": {
					"raw": "http://localhost:4000/graphql",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"graphql"
					]
				}
			},
			"response": []
		},
		{
			"name": "query categories",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjU2ZTA2ZTZjMjA2MDAyOTI2MDYzZCIsImVtYWlsIjoiamFAbWUuY29tIiwidXNlcm5hbWUiOiJza29yZWsiLCJpYXQiOjE2MjY3NjI3MTAsImV4cCI6MTYyNjc2NjMxMH0.oeZKtXlo4UypWgZUP9UD_PLwjC5nq8a7RYR5wqODt-o",
						"type": "text"
					}
				],
				"body": {
					"mode": "graphql",
					"graphql": {
						"query": "query{users{username, photos{isPrimary,info,url},id,email,token,role,firstName,lastName,address,city,state,country,phone,bio}}\n",
						"variables": ""
					}
				},
				"url": {
					"raw": "http://localhost:4000/graphql",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"graphql"
					]
				}
			},
			"response": []
		},
		{
			"name": "query users",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjU2ZTA2ZTZjMjA2MDAyOTI2MDYzZCIsImVtYWlsIjoiamFAbWUuY29tIiwidXNlcm5hbWUiOiJza29yZWsiLCJpYXQiOjE2MjY3NjI3MTAsImV4cCI6MTYyNjc2NjMxMH0.oeZKtXlo4UypWgZUP9UD_PLwjC5nq8a7RYR5wqODt-o",
						"type": "text"
					}
				],
				"body": {
					"mode": "graphql",
					"graphql": {
						"query": "mutation{createAd(title:\"pepper3\", body:\"even more pepper\",photos:[{url:\"i4\", info:\"info of first\"}, {url:\"id\", isPrimary: true}]){id,title,photos{url,info,isPrimary},currency,price,amountOfProduct,username}}",
						"variables": ""
					}
				},
				"url": {
					"raw": "http://localhost:4000/graphql",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"graphql"
					]
				}
			},
			"response": []
		},
		{
			"name": "delete ad",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Authorization",
						"value": "Bearer jjjjj",
						"type": "text"
					}
				],
				"body": {
					"mode": "graphql",
					"graphql": {
						"query": "mutation{createAd(title:\"peper\", body:\"more\"){title, username, id}}",
						"variables": ""
					}
				},
				"url": {
					"raw": "http://localhost:4000/graphql",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"graphql"
					]
				}
			},
			"response": []
		},
		{
			"name": "update ad",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjU2ZTA2ZTZjMjA2MDAyOTI2MDYzZCIsImVtYWlsIjoiamFAbWUuY29tIiwidXNlcm5hbWUiOiJza29yZWsiLCJpYXQiOjE2MjY3NjI3MTAsImV4cCI6MTYyNjc2NjMxMH0.oeZKtXlo4UypWgZUP9UD_PLwjC5nq8a7RYR5wqODt-o",
						"type": "text"
					}
				],
				"body": {
					"mode": "graphql",
					"graphql": {
						"query": "mutation{updatead(id:\"60f671cc21ae53002949994e\",amountOfProduct:1.777,photos:[{url:\"i4\", info:\"info of first\"}, {url:\"idPrime\", isPrimary: true}]){id,title,photos{url,info,isPrimary},currency,price,amountOfProduct,username}}",
						"variables": ""
					}
				},
				"url": {
					"raw": "http://localhost:4000/graphql",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"graphql"
					]
				}
			},
			"response": []
		},
		{
			"name": "update user",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Authorization",
						"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjU2ZTA2ZTZjMjA2MDAyOTI2MDYzZCIsImVtYWlsIjoiamFAbWUuY29tIiwidXNlcm5hbWUiOiJza29yZWsiLCJpYXQiOjE2MjY2OTcyMjIsImV4cCI6MTYyNjcwMDgyMn0.kgXNkYcG7H7tkqBqkno6V1SdInSdezwuqJL95gpcG4s",
						"type": "text"
					}
				],
				"body": {
					"mode": "graphql",
					"graphql": {
						"query": "mutation{updateUser( photos:[{url:\"i4\", info:\"info of first\"}, {url:\"id\", isPrimary: true}]){id,email,username, role, photos{url, info, isPrimary}, firstName,lastName,address,city,state,country,phone,bio}}",
						"variables": ""
					}
				},
				"url": {
					"raw": "http://localhost:4000/graphql",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"graphql"
					]
				}
			},
			"response": []
		},
		{
			"name": "create category",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Authorization",
						"value": "Bearer jjjjj",
						"type": "text"
					}
				],
				"body": {
					"mode": "graphql",
					"graphql": {
						"query": "mutation{createAd(title:\"peper\", body:\"more\"){title, username, id}}",
						"variables": ""
					}
				},
				"url": {
					"raw": "http://localhost:4000/graphql",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"graphql"
					]
				}
			},
			"response": []
		},
		{
			"name": "get photo",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "Authorization",
						"value": "Bearer jjjjj",
						"type": "text",
						"disabled": true
					}
				],
				"body": {
					"mode": "formdata",
					"formdata": []
				},
				"url": {
					"raw": "http://localhost:4000/uploads/dummy.jpg",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"uploads",
						"dummy.jpg"
					]
				}
			},
			"response": []
		},
		{
			"name": "upload photo",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Authorization",
						"value": "Bearer jjjjj",
						"type": "text"
					}
				],
				"body": {
					"mode": "formdata",
					"formdata": [
						{
							"key": "avatar",
							"type": "file",
							"src": "/home/junakk/Pictures/cover3.jpg"
						}
					]
				},
				"url": {
					"raw": "http://localhost:4000/upload",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "4000",
					"path": [
						"upload"
					]
				}
			},
			"response": []
		}
	]
}