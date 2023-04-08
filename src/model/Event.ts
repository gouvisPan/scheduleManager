export abstract class Event {
  id: string;
  title: string;
  info: string;
  category: string;

  constructor(id: string, title: string, info: string, category: string) {
    this.id = id;
    this.category = category;
    this.info = info;
    this.title = title;
  }
}
