export abstract class Event {
  id: string;
  title: string;
  info: string;
  category: string;

  constructor(id: string, title: string, info: string, category: string) {
    this.id = id;
    this.title = title;
    this.info = info;
    this.category = category;
  }
}
