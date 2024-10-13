
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  //   const deleteCountries = prisma.country.deleteMany()
  //   const deleteRegions = prisma.region.deleteMany()
  //   const deleteProcesses = prisma.process.deleteMany()
  //   const deleteVarieties = prisma.variety.deleteMany()
  //   const deleteMethods = prisma.method.deleteMany()    
  //   const deleteRoles = prisma.role.deleteMany()
  //   const deleteRoasts = prisma.roast.deleteMany()
  //   const deleteGrinds = prisma.grind.deleteMany()
  //   const deleteMimes = prisma.mime.deleteMany()
  //   const deleteStatus = prisma.status.deleteMany()
    
  //   // The transaction runs synchronously so deleteUsers must run last.
  //   await prisma.$transaction([deleteRegions, deleteCountries, deleteProcesses, deleteVarieties, deleteMethods, deleteRoles, deleteRoasts, deleteGrinds, deleteMimes, deleteStatus])

  // // List of all countries (names in Spanish)
  // const countries = [
  //   { name: 'Afganistán' },
  //   { name: 'Albania' },
  //   { name: 'Argelia' },
  //   { name: 'Andorra' },
  //   { name: 'Angola' },
  //   { name: 'Antigua y Barbuda' },
  //   { name: 'Argentina' },
  //   { name: 'Armenia' },
  //   { name: 'Australia' },
  //   { name: 'Austria' },
  //   { name: 'Azerbaiyán' },
  //   { name: 'Bahamas' },
  //   { name: 'Baréin' },
  //   { name: 'Bangladés' },
  //   { name: 'Barbados' },
  //   { name: 'Bielorrusia' },
  //   { name: 'Bélgica' },
  //   { name: 'Belice' },
  //   { name: 'Benín' },
  //   { name: 'Bután' },
  //   { name: 'Bolivia' },
  //   { name: 'Bosnia y Herzegovina' },
  //   { name: 'Botsuana' },
  //   { name: 'Brasil' },
  //   { name: 'Brunéi' },
  //   { name: 'Bulgaria' },
  //   { name: 'Burkina Faso' },
  //   { name: 'Burundi' },
  //   { name: 'Cabo Verde' },
  //   { name: 'Camboya' },
  //   { name: 'Camerún' },
  //   { name: 'Canadá' },
  //   { name: 'República Centroafricana' },
  //   { name: 'Chad' },
  //   { name: 'Chile' },
  //   { name: 'China' },
  //   { name: 'Colombia' },
  //   { name: 'Comoras' },
  //   { name: 'Congo (Brazzaville)' },
  //   { name: 'Congo (República Democrática)' },
  //   { name: 'Costa Rica' },
  //   { name: 'Croacia' },
  //   { name: 'Cuba' },
  //   { name: 'Chipre' },
  //   { name: 'Chequia (República Checa)' },
  //   { name: 'Dinamarca' },
  //   { name: 'Yibuti' },
  //   { name: 'Dominica' },
  //   { name: 'República Dominicana' },
  //   { name: 'Ecuador' },
  //   { name: 'Egipto' },
  //   { name: 'El Salvador' },
  //   { name: 'Guinea Ecuatorial' },
  //   { name: 'Eritrea' },
  //   { name: 'Estonia' },
  //   { name: 'Esuatini (antes Suazilandia)' },
  //   { name: 'Etiopía' },
  //   { name: 'Fiyi' },
  //   { name: 'Finlandia' },
  //   { name: 'Francia' },
  //   { name: 'Gabón' },
  //   { name: 'Gambia' },
  //   { name: 'Georgia' },
  //   { name: 'Alemania' },
  //   { name: 'Ghana' },
  //   { name: 'Grecia' },
  //   { name: 'Granada' },
  //   { name: 'Guatemala' },
  //   { name: 'Guinea' },
  //   { name: 'Guinea-Bisáu' },
  //   { name: 'Guyana' },
  //   { name: 'Haití' },
  //   { name: 'Honduras' },
  //   { name: 'Hungría' },
  //   { name: 'Islandia' },
  //   { name: 'India' },
  //   { name: 'Indonesia' },
  //   { name: 'Irán' },
  //   { name: 'Irak' },
  //   { name: 'Irlanda' },
  //   { name: 'Israel' },
  //   { name: 'Italia' },
  //   { name: 'Jamaica' },
  //   { name: 'Japón' },
  //   { name: 'Jordania' },
  //   { name: 'Kazajistán' },
  //   { name: 'Kenia' },
  //   { name: 'Kiribati' },
  //   { name: 'Kuwait' },
  //   { name: 'Kirguistán' },
  //   { name: 'Laos' },
  //   { name: 'Letonia' },
  //   { name: 'Líbano' },
  //   { name: 'Lesoto' },
  
  //   { name: 'Liberia' },
  //   { name: 'Libia' },
  //   { name: 'Liechtenstein' },
  //   { name: 'Lituania' },
  //   { name: 'Luxemburgo' },
  //   { name: 'Madagascar' },
  //   { name: 'Malaui' },
  //   { name: 'Malasia' },
  //   { name: 'Maldivas' },
  //   { name: 'Malí' },
  //   { name: 'Malta' },
  //   { name: 'Islas Marshall' },
  //   { name: 'Mauritania' },
  //   { name: 'Mauricio' },
  //   { name: 'México' },
  //   { name: 'Micronesia' },
  //   { name: 'Moldavia' },
  //   { name: 'Mónaco' },
  //   { name: 'Mongolia' },
  //   { name: 'Montenegro' },
  //   { name: 'Marruecos' },
  //   { name: 'Mozambique' },
  //   { name: 'Birmania (Myanmar)' },
  //   { name: 'Namibia' },
  //   { name: 'Nauru' },
  //   { name: 'Nepal' },
  //   { name: 'Países Bajos' },
  //   { name: 'Nueva Zelanda' },
  //   { name: 'Nicaragua' },
  //   { name: 'Níger' },
  //   { name: 'Nigeria' },
  //   { name: 'Corea del Norte' },
  //   { name: 'Macedonia del Norte' },
  //   { name: 'Noruega' },
  //   { name: 'Omán' },
  //   { name: 'Pakistán' },
  //   { name: 'Palaos' },
  //   { name: 'Palestina' },
  //   { name: 'Panamá' },
  //   { name: 'Papúa Nueva Guinea' },
  //   { name: 'Paraguay' },
  //   { name: 'Perú' },
  //   { name: 'Filipinas' },
  //   { name: 'Polonia' },
  //   { name: 'Portugal' },
  //   { name: 'Catar' },
  //   { name: 'Rumania' },
  //   { name: 'Rusia' },
  //   { name: 'Ruanda' },
  //   { name: 'San Cristóbal y Nieves' },
  //   { name: 'Santa Lucía' },
  //   { name: 'San Vicente y las Granadinas' },
  //   { name: 'Samoa' },
  //   { name: 'San Marino' },
  //   { name: 'Santo Tomé y Príncipe' },
  //   { name: 'Arabia Saudita' },
  //   { name: 'Senegal' },
  //   { name: 'Serbia' },
  //   { name: 'Seychelles' },
  //   { name: 'Sierra Leona' },
  //   { name: 'Singapur' },
  //   { name: 'Eslovaquia' },
  //   { name: 'Eslovenia' },
  //   { name: 'Islas Salomón' },
  //   { name: 'Somalia' },
  //   { name: 'Sudáfrica' },
  //   { name: 'Corea del Sur' },
  //   { name: 'Sudán del Sur' },
  //   { name: 'España' },
  //   { name: 'Sri Lanka' },
  //   { name: 'Sudán' },
  //   { name: 'Surinam' },
  //   { name: 'Suecia' },
  //   { name: 'Suiza' },
  //   { name: 'Siria' },
  //   { name: 'Taiwán' },
  //   { name: 'Tayikistán' },
  //   { name: 'Tanzania' },
  //   { name: 'Tailandia' },
  //   { name: 'Timor Oriental' },
  //   { name: 'Togo' },
  //   { name: 'Tonga' },
  //   { name: 'Trinidad y Tobago' },
  //   { name: 'Túnez' },
  //   { name: 'Turquía' },
  //   { name: 'Turkmenistán' },
  //   { name: 'Tuvalu' },
  //   { name: 'Uganda' },
  //   { name: 'Ucrania' },
  //   { name: 'Emiratos Árabes Unidos' },
  //   { name: 'Reino Unido' },
  //   { name: 'Estados Unidos de América' },
  //   { name: 'Uruguay' },
  //   { name: 'Uzbekistán' },
  //   { name: 'Vanuatu' },
  //   { name: 'Ciudad del Vaticano' },
  //   { name: 'Venezuela' },
  //   { name: 'Vietnam' },
  //   { name: 'Yemen' },
  //   { name: 'Zambia' },
  //   { name: 'Zimbabue' },
  // ];

  // // Seed countries
  // await prisma.country.createMany({
  //   data: countries,
  //   skipDuplicates: true,  // Avoid duplications if countries already exist
  // });
    
  // console.log('Seeding countries completed');

  // // Fetch the country ID for Colombia
  // const colombia = await prisma.country.findFirst({
  //   where: { name: 'Colombia' },
  // });

  // if (!colombia) {
  //   console.error('Colombia not found in the database. Please seed the Country model first.');
  //   return;
  // }

  // // List of coffee regions in Colombia
  // const coffeeRegions = [
  //   { name: 'Eje Cafetero', countryId: colombia.id },      // Coffee Axis
  //   { name: 'Antioquia', countryId: colombia.id },         // Antioquia
  //   { name: 'Santander', countryId: colombia.id },         // Santander
  //   { name: 'Nariño', countryId: colombia.id },            // Nariño
  //   { name: 'Tolima', countryId: colombia.id },            // Tolima
  //   { name: 'Cauca', countryId: colombia.id },             // Cauca
  //   { name: 'Huila', countryId: colombia.id },             // Huila
  //   { name: 'Valle del Cauca', countryId: colombia.id },   // Valle del Cauca
  //   { name: 'Magdalena', countryId: colombia.id },         // Magdalena
  //   { name: 'Boyacá', countryId: colombia.id },            // Boyacá
  // ];

  // // Seed coffee regions
  // await prisma.region.createMany({
  //   data: coffeeRegions,
  //   skipDuplicates: true,  // Avoid duplications if regions already exist
  // });

  // console.log('Seeding coffee regions completed');




  //   // List of coffee processes in Colombia
  //   const roasts = [
  //       { name: 'verde'},   
  //       { name: 'claro'},   
  //       { name: 'medio'},   
  //       { name: 'medio-oscuro'},   
  //       { name: 'oscuro'},   
  //       ];

  //       // Seed coffee processes
  //       await prisma.roast.createMany({
  //       data: roasts,
  //       skipDuplicates: true,  // Avoid duplications if processes already exist
  //       });

  //       console.log('Seeding coffee roasts completed');




  //   // List of coffee processes in Colombia
  //   const status = [
  //       { name: 'abierto'},   
  //       { name: 'pagado'},   
  //       { name: 'enviado'},   
  //       { name: 'entregado'},   
  //       { name: 'cancelado'},   
  //       { name: 'devuelto'},   
  //       { name: 'perdido'},   
  //       ];

  //       // Seed coffee processes
  //       await prisma.status.createMany({
  //       data: status,
  //       skipDuplicates: true,  // Avoid duplications if processes already exist
  //       });

  //       console.log('Seeding order status completed');


  //   // List of coffee processes in Colombia
  //   const mimes = [
  //       { name: 'photo'},   
  //       { name: 'video'},   
  //       { name: 'audio'},   
  //       { name: 'document'},   
  //       { name: 'drawing'},   
  //       { name: 'chart'},   
  //       ];

  //       // Seed coffee processes
  //       await prisma.mime.createMany({
  //       data: mimes,
  //       skipDuplicates: true,  // Avoid duplications if processes already exist
  //       });

  //       console.log('Seeding mime types completed');



  //           // List of coffee processes in Colombia
  //   const roles = [
  //       { name: 'root'},   
  //       { name: 'admin'},   
  //       { name: 'user'},   
  //       { name: 'customer'},   
  //       ];

  //       // Seed coffee processes
  //       await prisma.role.createMany({
  //       data: roles,
  //       skipDuplicates: true,  // Avoid duplications if processes already exist
  //       });

  //       console.log('Seeding user roles completed');



  //   // List of coffee processes in Colombia
  //   const grinds = [
  //       { name: 'grano'},   
  //       { name: 'grueso'},   
  //       { name: 'medio-grueso'},   
  //       { name: 'medio'},   
  //       { name: 'medio-fino'},   
  //       { name: 'fino'},   
  //       { name: 'extra fino'},   
  //       ];

  //       // Seed coffee processes
  //       await prisma.grind.createMany({
  //       data: grinds,
  //       skipDuplicates: true,  // Avoid duplications if processes already exist
  //       });

  //       console.log('Seeding coffee grinds completed');



  // // List of coffee processes in Colombia
  // const processes = [
  //   { name: 'lavado'},   
  //   { name: 'natural'},   
  //   { name: 'honey'},   
  // ];

  // // Seed coffee processes
  // await prisma.process.createMany({
  //   data: processes,
  //   skipDuplicates: true,  // Avoid duplications if processes already exist
  // });

  // console.log('Seeding coffee processes completed');

  // // List of coffee varieties in Colombia
  // const varieties = [
  //   { name: 'Arabica' },
  //   { name: 'Caturra' },
  //   { name: 'Castillo' },
  //   { name: 'Bourbon' },
  //   { name: 'Colombia' },
  //   { name: 'Tipica' },
  //   { name: 'Maragogipe' },
  //   { name: 'Catuaí' },
  //   { name: 'Criollo' },
  //   { name: 'Lempira' },
  //   { name: 'Pache' },
  //   { name: 'Sarchimor' },
  // ];

  // // Seed coffee varieties
  // await prisma.variety.createMany({
  //   data: varieties,
  //   skipDuplicates: true,  // Avoid duplications if variety already exist
  // });

  // console.log('Seeding coffee processes completed');






  // // List of coffee methods
  // const ids = await prisma.grind.findMany()||[]
  // const coffeeMethods = [
  //   { 
  //     name: 'French Press', 
  //     grindId: ids.find(grind => grind.name == "grueso")?.id
  //   },
  //   { 
  //     name: 'Espresso', 
  //     grindId: ids.find(grind => grind.name == "fino")?.id
  //   },
  //   { 
  //     name: 'Pour Over',       
  //     grindId: ids.find(grind => grind.name == "medio")?.id
  //   },
  //   { 
  //     name: 'Cold Brew', 
  //     grindId: ids.find(grind => grind.name == "grueso")?.id
  //   },
  //   { 
  //     name: 'AeroPress', 
  //     grindId: ids.find(grind => grind.name == "medio-fino")?.id
  //   },
  //   { 
  //     name: 'Turkish Coffee', 
  //     grindId: ids.find(grind => grind.name == "extra fino")?.id
  //   },
  //   { 
  //     name: 'Siphon Coffee', 
  //     grindId: ids.find(grind => grind.name == "medio")?.id
  //   },
  //   { 
  //     name: 'Moka Pot', 
  //     grindId: ids.find(grind => grind.name == "medio-fino")?.id
  //   },
  //   { 
  //     name: 'Nitro Cold Brew', 
  //     grindId: ids.find(grind => grind.name == "grueso")?.id
  //   },
  //   { 
  //     name: 'Café au Lait',
  //     grindId: ids.find(grind => grind.name == "medio")?.id
  //   },
  // ];

  // // Seed coffee methods
  // await prisma.method.createMany({
  //   data: coffeeMethods,
  //   skipDuplicates: true, // Avoid duplications if methods already exist
  // });

  // console.log('Seeding coffee methods completed');

//   const notasCafe = [
//     "Frutal",
//     "Cítrico",
//     "Caramelo",
//     "Chocolate",
//     "Nuez",
//     "Vainilla",
//     "Floral",
//     "Especias",
//     "Tostado",
//     "Té verde",
//     "Azúcar moreno",
//     "Miel",
//     "Naranja",
//     "Manzana",
//     "Frambuesa",
//     "Mora",
//     "Cereza",
//     "Melaza",
//     "Plátano",
//     "Pera",
//     "Ciruela",
//     "Coco",
//     "Jengibre",
//     "Canela",
//     "Pimienta",
//     "Papel de lija",
//     "Terroso",
//     "Humo",
//     "Mantequilla",
//     "Crema",
//     "Almendra",
//     "Pistacho",
//     "Grosella",
//     "Lima",
//     "Melón",
//     "Maracuyá",
//     "Chicle",
//     "Papaya",
//     "Kumquat",
//     "Tamarindo",
//     "Acidez brillante",
//     "Aromático",
//     "Cuerpo completo",
//     "Agridulce",
//     "Dulce",
//     "Suave",
//     "Sabor persistente",
//     "Aterciopelado",
//     "Redondo",
//     "Equilibrado",
//     "Complejo",
// ].map(note => {return {name: note}});

// await prisma.note.createMany({
//   data: notasCafe,
//   skipDuplicates: true, // Avoid duplications if methods already exist
// });

// console.log('Seeding coffee notes completed');

  // const admin = [
  //   {name: 'COMPANY_NAME',           value: 'Nonaya Coffee Lab'},
  //   {name: 'COMPANY_NIT',            value: '9016564576'},
  //   {name: 'COMPANY_EMAIL',          value: 'elizabeth@nonaya.coffee'},
  //   {name: 'COMPANY_WEB',            value: 'nonaya.coffee'},
  //   {name: 'COMPANY_PHONE',          value: '+57 3002968961'},
  //   {name: 'COMPANY_ADDRESS',        value: 'Calle 73#48 A 92, Medellín, Antioquia, Colombia'},
  //   {name: 'COMPANY_INSTAGRAM',      value: 'nonaya_coffee'},
  //   {name: 'COMPANY_TIKTOK',         value: ''},
  //   {name: 'COMPANY_FACEBOOK',       value: ''},
  //   {name: 'COMPANY_SALES_NAME',     value: 'Elizabeth Pulgarín Velasquez'},  
  //   {name: 'COMPANY_SALES_CC',       value: '1999633869'},
  //   {name: 'COMPANY_SALES_EMAIL',    value: 'elizabeth@nonaya.coffee'},  
  //   {name: 'COMPANY_MANAGER_NAME',   value: 'Elizabeth Pulgarín Velasquez'},  
  //   {name: 'COMPANY_MANAGER_CC',     value: '1999633869'},
  //   {name: 'COMPANY_MANAGER_EMAIL',  value: 'elizabeth@nonaya.coffee'},
  //   {name: 'COMPANY_MISSION',        value: ''},
  //   {name: 'COMPANY_VISION',         value: ''},
  // ]

  // await prisma.admin.createMany({
  //   data: admin,
  //   skipDuplicates: true, // Avoid duplications if methods already exist
  // });

  const fermentations = [
    {name: 'FERMENTATION_CARBONIC',  description: 'Inspirada en el mundo del vino, este proceso involucra la fermentación de las cerezas enteras en un entorno controlado con dióxido de carbono (CO₂). Las cerezas se colocan en tanques sellados con CO₂, lo que modifica la actividad de las levaduras y bacterias, creando sabores únicos, que van desde notas florales hasta perfiles más ácidos y afrutados'},
    {name: 'FERMENTATION_ANAEROBIC', description: 'Este método implica colocar las cerezas de café en tanques sellados sin oxígeno para fermentar. La fermentación anaeróbica puede durar desde unas pocas horas hasta días. Produce sabores más intensos y complejos, a menudo con notas más pronunciadas de frutas y especias'},
    {name: 'FERMENTATION_YEAST',     description: 'En lugar de confiar solo en las levaduras y bacterias naturales, los productores a veces añaden cultivos específicos de levaduras durante la fermentación para influir en el perfil de sabor final del café. Este método permite un mayor control sobre el proceso y puede producir cafés con características muy específicas'},
  ]

  await prisma.fermentation.createMany({
    data: fermentations,
    skipDuplicates: true, // Avoid duplications if methods already exist
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });   