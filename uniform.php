<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Uniform Menu</title>
    <style>
      /* General body styling */
      body {
        font-family: Arial, sans-serif;
        background-color: hsl(310, 33%, 93%);
        background-image: url("sewing2.jpg");
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        height: 100vh;
        margin: 0;
        color: #a0ebd3;
      }

      /* Header styling */
      h1 {
        color: white;
        padding: 20px;
        font-size: 32px;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.6);
        margin: 0;
      }

      /* Uniform section container styling */
      .uniform,
      .uniform2,
      .uniform3 {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
        padding: 40px 20px;
        flex-wrap: wrap;
      }

      /* Uniform item styling */
      .uniform-item {
        text-align: center;
        width: 140px;
      }

      /* Image styling */
      .uniform-item img {
        width: 140px;
        height: 180px;
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 10px;
        transition: transform 0.3s ease;
      }

      .uniform-item img:hover {
        transform: scale(1.1);
      }

      /* Link styling */
      .uniform-item a {
        color: white;
        text-decoration: none;
        font-size: 18px;
        font-weight: bold;
        margin-top: 10px;
        display: block;
        transition: color 0.3s ease;
      }

      .uniform-item a:hover {
        color: rgb(137, 205, 244);
      }
    </style>
  </head>
  <body>
    <h1>Uniform Collection</h1>

    <div class="uniform">
      <div class="uniform-item">
        <img src="shirt.jpg" alt="Shirt" />
        <a href="shirt.php">Shirt</a>
      </div>
      <div class="uniform-item">
        <img src="golfer shirt.jpg" alt="Golfer Shirt" />
        <a href="Golfer.php">Golfer Shirt</a>
      </div>
      <div class="uniform-item">
        <img src="plited skirt.jpg" alt="Skirt" />
        <a href="skirt.php">Skirt</a>
      </div>
      <div class="uniform-item">
        <img src="tunic.jpg" alt="Tunic" />
        <a href="Tunic.php">Tunic</a>
      </div>
      <div class="uniform-item">
        <img src="boys black pants.jpg" alt="Trousers" />
        <a href="trouser.php">Trousers</a>
      </div>
    </div>

    <div class="uniform2">
      <div class="uniform-item">
        <img src="blazer4.avif" alt="Blazer" />
        <a href="blazer.php">Blazer</a>
      </div>
      <div class="uniform-item">
        <img
          src="WhatsApp Image 2024-09-12 at 16.24.35.jpeg"
          alt="Matric Jacket"
        />
        <a href="Matric_jacket.php">Matric Uniforms</a>
      </div>
      <div class="uniform-item">
        <img src="jersey2.jpg" alt="Jersey" />
        <a href="Jersey.php">Jersey</a>
      </div>
      <div class="uniform-item">
        <img src="pullover.jpg" alt="Pull Over" />
        <a href="Pull_Over.php">Pull Over</a>
      </div>
      <div class="uniform-item">
        <img src="WhatsApp Image 2024-09-12 at 16.41.04.jpeg" alt="Tracksuit" />
        <a href="Tracksuit.php">Tracksuit</a>
      </div>
    </div>

    <div class="uniform3">
      <div class="uniform-item">
        <img src="tie.jpg" alt="Tie" />
        <a href="tie.php">Tie</a>
      </div>
      <div class="uniform-item">
        <img src="long socks.jpg" alt="Socks" />
        <a href="socks.php">Socks</a>
      </div>
      <div class="uniform-item">
        <img src="beanies.jpg" alt="Beanie" />
        <a href="Beanie.php">Beanie</a>
      </div>
      <div class="uniform-item">
        <img src="gloves,beanie,scarve.jpg" alt="Scarves and Gloves" />
        <a href="Scarves.php">Scarves and Gloves</a>
      </div>
    </div>
  </body>
</html>
