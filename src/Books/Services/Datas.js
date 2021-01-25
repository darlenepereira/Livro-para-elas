const book = [
    {
        id: 1,
        name: 'Mulheres, Raça e Classe',
        autor: 'Angela Davis',
        image: 'https://lojasaraiva.vteximg.com.br/arquivos/ids/6978693-287-426/787129.jpg?v=637075350280200000',
        link: 'https://drive.google.com/viewerng/viewer?url=http://ler-agora.jegueajato.com/Angela+Davis/Mulheres,+Raca+e+Classe+(314)/Mulheres,+Raca+e+Classe+-+Angela+Davis?chave%3D1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf'
    },
    {
        id: 2,
        name: 'Quem tem medo de feminismo negro?',
        autor: 'Djamila Ribeiro',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71+ltYY+D3L.jpg',
        link: 'http://professor.pucgoias.edu.br/sitedocente/admin/arquivosUpload/4069/material/Quem%20Tem%20Medo%20do%20Feminismo%20Negro%20-%20Djamila%20Ribeiro.pdf'
    },
    {
        id: 3,
        name: 'As alegrias da maternidade',
        autor: 'Buchi Emecheta',
        image: 'https://images-na.ssl-images-amazon.com/images/I/91a8Aib2AZL.jpg',
        link:  'https://drive.google.com/viewerng/viewer?url=http://ler-agora.jegueajato.com/Buchi+Emecheta/As+alegrias+da+maternidade+(127)/As+alegrias+da+maternidade+-+Buchi+Emecheta?chave%3D1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf'

    },
    {
        id: 4,
        name: 'Eu sei por que o pássaro canta na gaiola',
        autor: 'Maya Angelou',
        image: 'https://images-na.ssl-images-amazon.com/images/I/812BxHU1-mL.jpg',
        link: 'https://drive.google.com/viewerng/viewer?url=http://ler-agora.jegueajato.com/Angelou,+Maya/Eu+sei+por+que+o+passaro+canta+na+gaiola+(10)/Eu+sei+por+que+o+passaro+canta+na+gaiola+-+Angelou,+Maya?chave%3D1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf'
    },
    {
        id: 5,
        name: 'Hibisco Roxo',
        autor: 'Chimamanda Ngozi Adichie',
        image: 'https://m.media-amazon.com/images/I/519j4iD9idL.jpg',
        link: 'https://drive.google.com/viewerng/viewer?url=http://ler-agora.jegueajato.com/Chimamanda+Ngozi+Adichie/Hibisco+Roxo+(2615)/Hibisco+Roxo+-+Chimamanda+Ngozi+Adichie?chave%3D1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf'
    },
    {
        id: 6,
        name: 'O perigo de uma história única',
        autor: 'Chimamanda Adichie',
        image: 'https://imagens.lelivros.love/2020/10/baixar-livro-o-perigo-de-uma-historia-unica-chimamanda-ngozi-adichie-em-pdf-epub-mobi-ou-ler-online-370x556.jpg',
        link:'https://drive.google.com/viewerng/viewer?url=http://ler-agora.jegueajato.com/Chimamanda+Ngozi+Adichie/O+Perigo+de+uma+Historia+Unica+(138)/O+Perigo+de+uma+Historia+Unica+-+Chimamanda+Ngozi+Adichie?chave%3D1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf'
    },
    {
        id: 7,
        name: 'O ano em que disse sim',
        autor: 'Shonda Rhimes',
        image: 'https://images-na.ssl-images-amazon.com/images/I/91NN9MIstfL.jpg',
        link: 'https://drive.google.com/viewerng/viewer?url=http://ler-agora.jegueajato.com/Shonda+Rhimes/O+ano+em+que+disse+sim/O+ano+em+que+disse+sim+-+Shonda+Rhimes?chave%3D1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf'
    },
    {
        id: 8,
        name: 'A cor púrpura',
        autor: 'Alice Walker',
        image: 'https://2.bp.blogspot.com/-Rez3xwK1PS0/WSXQtsy-2LI/AAAAAAAA0FU/X5VyKtjlSHw_gnlYKtxjjBENRMziRoNoQCLcB/s1600/A%2BCor%2BPurpura.jpg',
        link: 'https://drive.google.com/viewerng/viewer?url=http://ler-agora.jegueajato.com/Alice+Walker/A+Cor+Purpura+(91)/A+Cor+Purpura+-+Alice+Walker?chave%3D1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf'
    },
    {
        id: 9,
        name: 'Um Defeito de Cor',
        autor: 'Ana Maria Gonçalves',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81cC72EgfvL.jpg',
        link:   'https://drive.google.com/viewerng/viewer?url=http://ler-agora.jegueajato.com/Ana+Maria+Goncalves/Um+Defeito+de+Cor+(989)/Um+Defeito+de+Cor+-+Ana+Maria+Goncalves?chave%3D1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf'
    },
    {
        id: 10,
        name: 'Pequeno manual Antirracista',
        autor: 'Djamila Ribeiro',
        image: 'https://imagens.lelivros.love/2020/08/Baixar-Livro-Pequeno-Manual-Antirracista-Djamila-Ribeiro-Em-Epub-Pdf-Mobi-Ou-Ler-Online_large.jpg',
        link:   'https://drive.google.com/viewerng/viewer?url=http://ler-agora.jegueajato.com/Ribeiro,+Djamila/Pequeno+manual+antirracista+(343)/Pequeno+manual+antirracista+-+Ribeiro,+Djamila?chave%3D1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf'
    },
    {
        id: 11,
        name: 'Sejamos Todos Feministas',
        autor: 'Chimamanda Ngozi Adichie',
        image: 'https://imagens.lelivros.love/2016/02/Baixar-Livro-Sejamos-Todos-Feministas-Chimamanda-Ngozi-Adichie-em-PDF-ePub-e-Mobi-ou-ler-online.jpg',
        link:   'https://drive.google.com/viewerng/viewer?url=http://ler-agora.jegueajato.com/Chimamanda+Ngozi+Adichie/Sejamos+todos+feministas+(2614)/Sejamos+todos+feministas+-+Chimamanda+Ngozi+Adichie?chave%3D1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf'
    },
    {
        id: 12,
        name: 'Minha História',
        autor: 'Michelle Obama',
        image: 'https://imagens.lelivros.love/2019/11/baixar-livro-minha-historia-michelle-obama-em-pdf-epub-mobi-ou-ler-online-370x556.jpg',
        link:   'https://drive.google.com/viewerng/viewer?url=http://ler-agora.jegueajato.com/Michelle+Obama/Minha+historia+(90)/Minha+historia+-+Michelle+Obama?chave%3D1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf'
    },
    {
        id: 13,
        name: 'Kindred – Laços de Sangue',
        autor: 'Octavia E. Butler',
        image: 'https://imagens.elivros.love/Octavia-e-Butler/Baixar-Livro-Kindred-Lacos-de-Sangue-Octavia-e-Butler-Em-Epub-Pdf-Mobi-Ou-Ler-Online_large.jpg',
        link:   'https://drive.google.com/viewerng/viewer?url=http://ler-agora.jegueajato.com/Octavia+E.+Butler/Kindred+-+Verbunden+(55)/Kindred+-+Verbunden+-+Octavia+E.+Butler?chave%3D1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf'
    },
    {
        id: 14,
        name: "Olhos d'Água",
        autor: 'Conceição Evaristo',
        image: 'https://imagens.lelivros.love/2017/12/Baixar-Olhos-dgua-Conceicao-Evaristo-em-Pdf-ePub-e-Mobi-ou-ler-online.jpg',
        link:   'https://drive.google.com/viewerng/viewer?url=http://ler-agora.jegueajato.com/Conceicao+Evaristo/Olhos+dagua/Olhos+dagua+-+Conceicao+Evaristo?chave%3D1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf'
    },
    {
        id: 15,
        name: "Filhos de sangue e osso: O legado de Orïsha",
        autor: 'Tomy Adeiemi',
        image: 'https://imagens.lelivros.love/2020/04/baixar-livro-filhos-de-sangue-e-osso-o-legado-de-orisha-vol-01-tomi-adeyemi-em-pdf-epub-mobi-ou-ler-online.jpg',
        link:   'https://drive.google.com/viewerng/viewer?url=http://ler-agora.jegueajato.com/Tomi+Adeyemi/Filhos+de+sangue+e+osso+(133)/Filhos+de+sangue+e+osso+-+Tomi+Adeyemi?chave%3D1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf'
    },
    {
        id: 16,
        name: "O ódio que você semeia",
        autor: 'Angie Thomas',
        image: 'https://imagens.lelivros.love/2018/05/Baixar-O-odio-que-voce-semeia-Angie-Thomas-em-Pdf-ePub-e-Mobi-ou-ler-online-370x549.jpg',
        link:   'https://drive.google.com/viewerng/viewer?url=http://ler-agora.jegueajato.com/Angie+Thomas/O+odio+que+voce+semeia/O+odio+que+voce+semeia+-+Angie+Thomas?chave%3D1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf'
    },
    {
        id: 17,
        name: "Esse cabelo",
        autor: 'Djaimilia Pereira de Almeida',
        image: 'https://imagens.lelivros.love/2018/06/Baixar-Esse-Cabelo-Djaimilia-Pereira-de-Almeida-em-Pdf-ePub-e-Mobi-ou-ler-online.jpg',
        link:   'https://drive.google.com/viewerng/viewer?url=http://ler-agora.jegueajato.com/Djaimilia+Pereira+de+Almeida/Esse+Cabelo/Esse+Cabelo+-+Djaimilia+Pereira+de+Almeida?chave%3D1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf'
    },
    {
        id: 18,
        name: "O olho mais azul",
        autor: 'Toni Morrison',
        image: 'https://imagens.lelivros.love/2020/05/Baixar-Livro-O-Olho-Mais-Azul-Toni-Morrison-em-PDF-Epub-MOBI-ou-Ler-Online-370x556.jpg',
        link:   'https://drive.google.com/viewerng/viewer?url=http://ler-agora.jegueajato.com/Toni+Morrison/O+Olho+Mais+Azul+(138)/O+Olho+Mais+Azul+-+Toni+Morrison?chave%3D1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf'
    },

]

export default book