YoutuNote is an web application that woud be a solution for students to face the inconvenient moments that they take a note separately such as using Evernote while they study through the Youtube.

User can use TinyMCE rich text editor while they watching Youtube video on the same page.



# RESTful Route

<table>
  <tr>
    <td>Index</td>
    <td>/content</td>
    <td>GET</td>
    <td>List all contents</td>

  </tr>
  <tr>
    <td>New</td>
    <td>/content/new</td>
    <td>GET</td>
    <td>Show new create form (video)</td>
  </tr>
  <tr>
    <td>Create</td>
    <td>/content</td>
    <td>Post</td>
    <td>Create a new video content, then redirect indexpage</td>
  </tr>
  <tr>
    <td>Show</td>
    <td>/content/:id</td>
    <td>GET</td>
    <td>Show one specific video player and note</td>
  </tr>
  
  <tr>
    <td>Update</td>
    <td>/content/:id</td>
    <td>PUT</td>
    <td>Update the particular text in note</td>
  </tr>

  <tr>
    <td>Edit</td>
    <td>/content/:id/info-edit</td>
    <td>GET</td>
    <td>Show edit video info form(title, url, description)</td>

  </tr>

   <tr>
    <td>Update</td>
    <td>/content/:id/</td>
    <td>PUT</td>
    <td>Update the particular video info</td>
   </tr>

   <tr>
    <td>Destroy</td>
    <td>/content/:id</td>
    <td>DELETE</td>
    <td>Delete a particular video and note</td>
   </tr>

  
</table>


# Configure passport
* Add Register, Login, Logout routes
* Show/hide auth links in navbar


# Adding in Flash

*Install and configure connect -flash
*Add bootstrap alert to header 

# Adding draggable function to note and video. 
