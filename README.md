# codeversity-merchant
El objetivo de la aplicación es permitirle al usuario poder adquirir pokemon de la PokeStore.
En un comienzo, se le mostrarán al usuario todos los pokemon disponibles, sin ninguna opción de filtrado.
Esto no es realmente deseado, ya que se le dificultará a este poder encontrar facilmente aquellos pokemon que desee adquirir. El objetivo de los siguientes problemas será resolver esta situación para favorecer la experiencia del usuario.


# Ejercicio 1 - Implementar un buscador

- En la carpeta components/AutocompleteInput se encontrará la estructura de un componente que deberá emplearse para implementar un input que mostrará recomendaciones al usuario
- La implementación del mismo se hará por etapas, atendiendo a la complejidad de resolución que representa cada etapa.

## Condiciones generales del problema
- Para obtener los pokemon se realizarán peticiones a la API local que correrá en la aplicación.
- 

## Etapa 1
- En esta etapa se desea implementar una versión del componente que recibirá un listado de sugerencias y renderiza todas ellas.

El componente deberá renderizar un componente <div /> que tiene una clase wrapper, y dos elementos hijos. El primero tendrá la clase control y el segundo la clase list.

El elemento con la clase control deberá contener un elemento <input /> que tendrá a la clase list. A través de este componente es que usuario hará las consultas. 

Las mismas se mostrarán dentro del elemento con la clase list. Para tal fin, cada elemento ( tag de libre elección) deberá incluir la clase list-item.

A tener en cuenta:

- Las suggestions formarán parte del estado de la aplicación. Se deberá emplear un selector.
- Debe respetarse el orden original de las sugerencias. No es posible realizar operaciones que alteren el orden.
- El componente acepta la prop onSelectedItem, que deberá invocarse al realizar una sugerencia.
- Se recibirá una prop isLoading, que será un booleano. Cuando la misma sea verdadera, se deberá incluir la clase is-loading en el elemento cuya clase es control.
- No es relevante para la solución la implementación de CSS. La misma es de libre implementación.

## Etapa 2
Check:
- https://react-redux.js.org/api/hooks

En esta etapa se desea poder tomar el input del usuario y con él utilizar el ciclo de redux para realizar una petición GET a la ruta de pokemon https://pokeapi.co/api/v2/pokemon?limit=890. A su vez, con ella actualizar el estado state.suggestions (a implementar).

Sugerencia: Tomar de referencia el estado UI ya implementado.

A tener en cuenta:

- Al momento de realizar la petición, es preciso que se invoque el método del model UI "setLoading" al momento de iniciar y finalizar la petición HTTP, ya que de ese modo se actualizará el estado, siendo visible este cambio para el usuario.
- Se empleará la biblioteca axios para realizar la petición.
- Si la respuesta es fallida, se actualizarán las suggestions con un array vacio.
- Se deberá emplear useDispatch para despachar la action de petición de suggestions. La misma deberá crearse en el modelo de redux.

# Etapa 3
La finalidad de esta etapa es no realizar una request cada vez que el usuario realiza cualquier cambio. Sino esperar un tiempo definido para volver a realizarla.

A tener en cuenta:
- Ese tiempo de espera se encuentra definido en el componente como DEBOUNCE_DELAY.
- Para realizar esto se sugiere emplear el método debounce, que ya se encuentra implementado en la biblioteca lodash.

# Etapa 4
En este punto, ya llegando al final de ejercicio, notamos que podría existir un problema más con nuestra implementación, y es que posible recibir muchas suggestions, que de acuerdo a nuestra implementación podría ocasionar dificultades en el rendimiento.

Esta etapa es de libre implementación.

A tener en cuenta:
- Una posible solución podría ser a nivel del componente, empleando virtual rendering.
- Otra posible opción sería recurrir a la paginación. Una buena API debería proveer de esta opción a la hora de realizar peticiones que podrían arrojar resultados muy grandes. Sugerencia: De elegir esta solución, indagar en la API y de Pokemon y adaptar el ciclo de la petición.

# Ejercicio 2