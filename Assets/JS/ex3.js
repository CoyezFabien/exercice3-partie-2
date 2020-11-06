var zoom = document.getElementById('picture');
 
document.getElementById('picture').onclick = function bigger()
{
var size = zoom.clientWidth;
zoom.style.width = (size + 50)+'px';
console.log(size);
}
// le console.log console.log affiche les éléments dans un arbre de type HTML Plus précisément, console.log fait un traitement spécial aux éléments DOM
/*sur cette exercice on doit modifier l'image, l'image est représenté dans le html par une ID
cette ID pour pouvoir l'utiliser dans le javascript il faut la récuperer et pour cela on utilise document.getElementByID('');
On a récupere l'image en quelque sorte on va maintenant lui associé une variable pour qu'elle représente l'image dans le javascript
var.... = document.getElementById('')
maintenant on va mettre l'evenement sur l'ID*/ 