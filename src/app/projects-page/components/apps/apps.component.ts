import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css'],
})
export class AppsComponent implements OnInit {
  apps = [
    {
      tittle: 'PocketList',
      subTitle: '',
      description: 'descpPoc2.texto',
      demo: 'https://neryad.github.io/pocketPage/',
      repo: '',
    },
    {
      tittle: 'TelePhoneCheck -NPM',
      subTitle: '',
      description: 'descTelphone.texto',
      demo: 'https://www.npmjs.com/package/telephonecheck',
      repo: '',
    },
    {
      tittle: 'TelePhoneCheck - Pub.dev/flutter',
      subTitle: '',
      description: 'descTelphone.texto',
      demo: 'https://pub.dev/packages/telephone_check',
      repo: '',
    },
    {
      tittle: 'bryanrivas.com',
      subTitle: '',
      description: 'descBr.texto',
      demo: 'https://bryanrivas.com/',
      repo: '',
    },
    {
      tittle: 'RDNews',
      description: 'rdNews.texto',
      repo: 'https://github.com/neryad/local-rd-news',
      demo: 'https://localrdnews.netlify.app/',
    },
    {
      tittle: 'N-trix',
      description: 'nTrix.texto',
      repo: 'https://github.com/neryad/N-tetris',
      demo: 'https://ntrix.netlify.app/',
    },
    {
      tittle: 'QuizBrais',
      description: 'quizBrais.texto',
      repo: 'https://github.com/neryad/quizBrais',
      demo: 'https://quizbrais.netlify.app',
    },
    {
      tittle: 'LlevaCuentas',
      description: 'llevaCuentas.texto',
      repo: 'https://github.com/neryad/llevaCuentas',
      demo: 'https://llevacuentas.netlify.app',
    },
    {
      tittle: 'Memories',
      description: 'memories.texto',
      repo: 'https://github.com/neryad/memory_game',
      demo: '',
    },
    {
      tittle: 'Tic-Tac-Toe',
      description: 'ticTac.texto',
      repo: 'https://github.com/neryad/flutter-tic-tac-toe',
      demo: '',
    },
    {
      tittle: 'N-Battle-Ships Wars',
      description: 'nBattleShips.texto',
      repo: 'https://github.com/neryad/nerbattleshipwars',
      demo: '',
    },
    {
      tittle: 'Funko api',
      description: 'funkoApi.texto',
      repo: 'https://github.com/neryad/funkoApi',
      demo: '',
    },
    {
      tittle: 'Scrapping API',
      description: 'scrappingNews.texto',
      repo: 'https://github.com/neryad/api-scrapping-news',
      demo: '',
    },
    {
      tittle: 'NodeJs Api + SQL',
      description: 'apiNodeSql.texto',
      repo: 'https://github.com/neryad/apiNodeSql',
      demo: '',
    },
    {
      tittle: 'Space Game',
      description: 'gameJsBeta.texto',
      repo: 'https://github.com/neryad/gameJsBeta',
      demo: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
