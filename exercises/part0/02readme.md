## Forms and http post request
Here we're dealing with a webpage that is made up of pure html, css and js. Any changes are handled using event handlers. Here a user can input something and manipulate the DOM. This is the code: 
```
title: index.html

<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="/exampleapp/main.css" />
  <script type="text/javascript" src="/exampleapp/main.js"></script>
</head>
<body>
  <div class='container'>
    <h1>Notes</h1>
    <div id='notes'>
    </div>
    <form action='/new_note' method='POST'>
      <input type="text" name="note"><br>
      <input type="submit" value="Save">
    </form>
  </div>
</body>
</html>
```

```
title: main.js

var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const data = JSON.parse(this.responseText)
    console.log(data)

    var ul = document.createElement('ul')
    ul.setAttribute('class', 'notes')

    data.forEach(function(note){
      var li = document.createElement('li')
      
      ul.appendChild(li);
      li.appendChild(document.createTextNode(note.content))
    })

    document.getElementById("notes").appendChild(ul)
  }
}

xhttp.open("GET", "/exampleapp/data.json", true)
xhttp.send()
```

```mermaid
    sequenceDiagram
        autonumber
        actor u as user
        participant c as client
        participant s as server
        u->>c: enters a new input and<br/>clicks on save button
        c->>s: POST https://example.com/new_note
        activate s
        Note right of s: Server has some code that adds<br/> new note in the list.<br/> Although new note doesn't <br/> persists after server restart<br/> because we are not saving <br/>new note inside the data.json file.
        s-->>c: REDIRECT https://example.com
        deactivate s
        c->>s: GET https://example.com
        activate s
        s-->>c: HTML Document
        deactivate s
        c->>s: GET https://example.com/main.css
        activate s
        s-->>c: css file
        deactivate s
        c->>s: GET https://example.com/main.js
        activate s
        s-->>c: javascript file
        deactivate s
        c->>s: GET https://example.com/data.json
        activate s
        s-->>c: data.json file
        deactivate s
        Note left of c: New data served to client
        
```