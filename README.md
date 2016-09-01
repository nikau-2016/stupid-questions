# stupid-questions
No question too stupid.

## Initial roles/interests

Devops: Mandy & Erwin<br>
Git: Kamon<br>
Client: Kamon, Mandy, Jana<br>
Server: Erwin, Sach, Siobhan<br>
Full-stack: Justin, Prem


#Routes - Questions

<h3>GET : http://s2pid-kweschinz.herokuapp.com/v1/questions </h3>

Sends back all questions currently in the database in JSON 

Response body:

<pre>
<code>
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
<code>
</pre>

<h3>POST: http://s2pid-kweschinz.herokuapp.com/v1/questions </h3>

You need to send the data as JSON (application/json)

<pre>
  <code>
  {
    "content": "...and why should I use it?",
    "title": "What is GIT?",
    "created": "2nd SEPT 2016"
  }
  </code>
</pre>

```
Status(200) - OK
Status(500) - Internal Server Error
```


#Routes - Answers

<h3>GET : http://s2pid-kweschinz.herokuapp.com/v1/questions/[id]/answers </h3>

Sends back all answers, currently in the database, attached with the question's id 

Response body:

<pre>
<code>
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
<code>
</pre>

<h3>POST: http://s2pid-kweschinz.herokuapp.com/v1/questions/[id]/answers </h3>

You need to send the data as JSON (application/json)

<pre>
  <code>
  {
      content: "YES! Working",
      created: "2nd SEPT 2016"
  }
  </code>
</pre>

```
Status(200) - OK
Status(500) - Internal Server Error
```







