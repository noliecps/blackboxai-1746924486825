import { Editora } from '../modelo/Editora.ts';

const editoras: Editora[] = [
  new Editora(1, 'Alta Books'),
  new Editora(2, 'Bookman'),
  new Editora(3, 'Addison Wesley'),
  new Editora(4, 'Pearson')
];

export class ControleEditora {
  getEditoras(): Editora[] {
    return editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const filtro = editoras.filter(e => e.codEditora === codEditora);
    return filtro.length ? filtro[0].nome : undefined;
  }
}
