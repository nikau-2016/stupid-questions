# stupid-questions
No question too stupid.

## Initial roles/interests

Devops: Mandy & Erwin<br>
Git: Kamon<br>
Client: Kamon, Mandy, Jana<br>
Server: Erwin, Sach, Siobhan<br>
Full-stack: Justin, Prem

##Heroku Server##

The server is currently running on the domain ``http://s2pid-kweschinz.herokuapp.com``

##Routes - Questions

###GET : /v1/questions ###

Sends back all questions currently in the database in JSON 

Response body:

```
{
  data: [
    {
      id: 1,
      content: "I am trying to see if this works",
      title: "Does this work?",
      created: "1st Sept"
    },
    {
      id: 2,
      content: "I see JS everywhere but I am not sure what it stands for!",
      title: "What does JS stand for?",
      created: "2nd Sept"
    },    
  ]
}
```

###POST: /v1/questions ###

You need to send the data as JSON (application/json)

```
  {
    "content": "...and why should I use it?",
    "title": "What is GIT?",
    "created": "2nd SEPT 2016"
  }
```

```
Status(200) - OK
Status(500) - Internal Server Error
```


##Routes - Answers

###GET : /v1/questions/[id]/answers ###

Sends back all answers, currently in the database, attached with the question's id 

Response body:

```
{
  data: [
    {
      id: 1,
      content: "I believe this works!",
      created: "2nd SEPT 2016",
      question_id: "1"
    },
    {
      id: 1,
      content: "YES! Working",
      created: "2nd SEPT 2016",
      question_id: "1"
    },    
  ]
}
```

### POST: /v1/questions/[id]/answers ###

You need to send the data as JSON (application/json)

```
  {
      content: "YES! Working",
      created: "2nd SEPT 2016"
  }
```

```
Status(200) - OK
Status(500) - Internal Server Error
```







