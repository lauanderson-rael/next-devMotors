export async function getDataHome(){
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/67bbd1a63b8d8645536f29be?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`, {next: {revalidate: 120}})

        if (!res.ok){
            throw new Error('Não foi possível carregar os dados')
        }
        return res.json()

    } catch (error) {
        throw new Error('Não foi possível carregar os dados')
    }
}

export async function getSubMenu(){
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug,title`,  {next: {revalidate: 120}})

        if (!res.ok){
            throw new Error('Não foi possível carregar os dados')
        }
        return res.json()

    } catch (error) {
        throw new Error('Não foi possível carregar os dados')
    }
}

// adicionado: {nex: {revalidate: 120}}
// para atualizar os dados em 2 minutos sem precisar recarregar a pagina
// se não for feito isso, os dados serao carregados apenas uma vez
// se 2 usuarios acessarem o site ao mesmo tempo, eles terao os mesmos dados
