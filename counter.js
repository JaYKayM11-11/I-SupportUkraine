counter.js on my webpage

//intermingling some javascript onto my html coding//

<!DOCTYPE html>
<html>
 
<html lang="eng">
<body>

  <script>
  
   let counter = 0;

function count() {
    counter++;
    document.querySelector('h1').innerHTML = counter;
    
    if (counter % 10 === 0) {
        alert(`Count is now ${counter}`)
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = count;
});

  </script>  
    
</body>
</html>
