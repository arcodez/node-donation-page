

Proyecto de Diseño de base de datos. **Prof. Eduardo Rodríguez**

Introducción, usuarios, roles y accesos.

Se desea realizar una aplicación web de donaciones la cual tendrá diferentes roles

de usuarios (Administrador, Líder de campaña, y Agente); un usuario puede tener cumplir

múltiples roles. El **agente** debe ser capaz de ver las órdenes que él o ella tengan asociados,

así como también un dashboard donde visualizará el monto objetivo de la campaña y el total

recaudado por el equipo y por él o ella, así como también el porcentaje de visitantes que se

convierten en donantes (de ese Agente). El **Líder de campaña** tendrá el mismo dashboard

pero con la diferencia de que este podrá visualizar el monto recaudado individualmente por

cada agente que pertenezca a la campaña, también podrá visualizar el módulo de órdenes

pero esta vez incluyendo las relacionadas a todos los agentes dentro de esa campaña.

Además, el líder de campaña podrá ser capaz de configurar: Los productos o servicios que

se van a vender en la donación, definir el monto objetivo de la campaña y poder incluir

nuevos usuarios para su campaña (ya sea usuarios de tipo líder de campaña o de agentes).

El **administrador** va a tener la capacidad de crear nuevas campañas, de gestionar nuevos

usuarios (siendo capaz de crear usuarios de cualquier rol) así como también la capacidad

de ver todas las órdenes registradas en todas las campañas.

Campañas.

Las campañas representan a la entidad que va a agrupar e identificar el propósito de

las donaciones. Ejemplo: Niños con cáncer, Operación sonrisa, etc.

Donaciones.

Existen dos tipos de donaciones: 1 - Las donaciones voluntarias 2 - Las donaciones

obtenidas por la venta de los productos o servicios. Esto quiere decir que una campaña

puede tener un conjunto de productos disponibles para la venta. Ejemplo: Franelas con

logos de patrocinantes, Tickets para un concierto, etc; toda clase de productos o servicios

que puedan ser vendidos para recaudar fondos. El proceso de donación empieza cuando un

visitante llega a la página de donación la cual tendrá asociada la campaña y el agente al

que corresponderá la donación (si el visitante finaliza el proceso). Luego de llegar a la

página el visitante puede seleccionar los productos que desee para comprar y colaborar o

también puede elegir un monto libre para realizar la donación, o donar de ambas formas en

una sola orden. Al finalizar el donante recibirá una pantalla con el código de su compra que

luego podrá utilizar para retirar y posiblemente pagar su compra (si no se ha pagado

previamente desde el sistema), este último proceso (de retiro) es algo manual llevado a

cabo por la organización, lo único que genera el sistema es el código. No se gestionan

envíos de productos correspondientes a una orden. La única forma que los donantes

tendrán para obtener sus productos es buscándolos.





Método de pago

Es posible ser flexible con los métodos de pago. El grupo de estudiantes que decida

configurar pagos en efectivo, adelante; el que decida recibir tarjetas de crédito, también.

Tecnologías

Aplicación web: NodeJS con ExpressJS obligatorio.

SGBD: Postgres.

Gitlab

Fecha de entrega

**11 de Mayo del 2021**. Voy a clonar los repositorios el día siguiente en la mañana.

Asegúrese de incluir en el README.md todas las instrucciones de instalación y

configuración. Debo tener que:

1 - Clonar el repositorio.

2 - Instalar las dependencias.

3 - Configurar los parámetros de la BD.

4 - Correr un script que cree las tablas en la BD.

5 - Ejecutar el comando para correr su proyecto.

6 - Abrir la aplicación en el navegador.

Integrantes

Grupos de máximo 4 estudiantes.

