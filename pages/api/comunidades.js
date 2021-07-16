import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if(request.method === 'POST') { 
        const TOKEN = '5f4924c2f78d9a2c416a6119e676a9';
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "972306", //ID do model de "Communities" criado pelo DATO
            ...request.body,
            // title: "Comunidade de Teste",
            // imageUrl: "https://rd1.com.br/wp-content/uploads/2014/10/D2.jpg",
            // creatorSlug: "dev-andressacantelli"
        })

        console.log(registroCriado);

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })

}


   