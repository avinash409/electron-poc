import { OnInit, Injectable } from '@angular/core';
import * as sqlite3 from 'sqlite3';

@Injectable()
export class SqliteService implements OnInit {
  public sqlite: any;
  public db: any;
  private forumla = [{
    min_height: 1,
    max_height: 5,
    // tslint:disable-next-line:max-line-length
    formula: '(-0.000000000000209*(length^6)) + (0.000000000354203*(length^5)) - (0.000000236458982*(length^4)) + (0.000079763623753*(length^3)) - (0.014796312217868*(length^2)) + (1.671062715045990*(length)) + 4.364647528040220'
  }, {
    min_height: 6,
    max_height: 10,
    // tslint:disable-next-line:max-line-length
    formula: '(-0.000000000000237*(length^6)) + (0.000000000399954*(length^5)) - (0.000000266660652*(length^4)) + (0.000089688806511*(length^3)) - (0.016559474997337*(length^2)) + (1.896860973876760*(length)) + 4.857946642703610'
  }, {
    min_height: 11,
    max_height: 15,
    // tslint:disable-next-line:max-line-length
    formula: '(-0.000000000000255*(length^6)) + (0.000000000431387*(length^5)) - (0.000000287632731*(length^4)) + (0.000096691596720*(length^3)) - (0.017824883183209*(length^2)) + (2.060781935018890*(length)) + 5.236824678082480'
  }, {
    min_height: 16,
    max_height: 20,
    // tslint:disable-next-line:max-line-length
    formula: '(-0.000000000000283*(length^6)) + (0.000000000478476*(length^5)) - (0.000000319168046*(length^4)) + (0.000107277223916*(length^3)) - (0.019742382235734*(length^2)) + (2.304985275772200*(length)) + 5.683366530080090'
  }, {
    min_height: 21,
    max_height: 25,
    // tslint:disable-next-line:max-line-length
    formula: '(-0.000000000000302*(length^6)) + (0.000000000511861*(length^5)) - (0.000000341647750*(length^4)) + (0.000114886163422*(length^3)) - (0.021137426161431*(length^2)) + (2.484672567479720*(length)) + 5.966768355021490'
  }, {
    min_height: 26,
    max_height: 30,
    // tslint:disable-next-line:max-line-length
    formula: '(-0.000000000000318*(length^6)) + (0.000000000538089*(length^5)) - (0.000000359436914*(length^4)) + (0.000120956553503*(length^3)) - (0.022260337566422*(length^2)) + (2.629852067693720*(length)) + 6.097541443479710'
  }, {
    min_height: 31,
    max_height: 40,
    // tslint:disable-next-line:max-line-length
    formula: '(-0.000000000000325*(length^6)) + (0.000000000551085*(length^5)) - (0.000000368714987*(length^4)) + (0.000124378675241*(length^3)) - (0.022973068647275*(length^2)) + (2.740334775426160*(length)) + 6.042465347680260'
  }, {
    min_height: 41,
    max_height: null,
    // tslint:disable-next-line:max-line-length
    formula: '(-0.000000000000333*(length^6)) + (0.000000000565200*(length^5)) - (0.000000378191099*(length^4)) + (0.000127632121726*(length^3)) - (0.023599276600635*(length^2)) + (2.832072115019400*(length)) + 6.363935528264850'
  }];

  constructor() { }

  ngOnInit() {
    this.sqlite = sqlite3.verbose();
    this.db = new this.sqlite.Database(':memory:');
    this.createTable();
  }

  createTable() {
    this.db.serialize(function () {
      this.db.run('CREATE TABLE height_formula (min_height integer, max_height integer, formula text)');
      const stmt = this.db.prepare('INSERT INTO height_formula(id, min_height, max_height, formula) VALUES (?, ?, ?)');
      for (let i = 0; i < this.forumla.length; i++) {
        const f = this.forumla[i];
        stmt.run(f.min_height, f.max_height, f.formula);
      }
      stmt.finalize();

      this.db.each('SELECT rowid AS id, min_height, max_height, formula FROM height_formula', function (err, row) {
        console.log(row.id + ': ' + row.max_height);
      });
    });

    this.db.close();
  }

}
