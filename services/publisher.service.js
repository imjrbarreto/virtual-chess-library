const { faker } = require("@faker-js/faker");
const boom = require("@hapi/boom")

class PublisherService {
  constructor() {
    this.publishers = [];
    this.generate();
  }

  generate() {
    const chessPublishers = [
      {
          name: "Everyman Chess",
          description: "Everyman Chess is a leading publisher of chess books, renowned for its high-quality publications covering a wide range of topics including openings, tactics, strategy, and more."
      },
      {
          name: "New In Chess",
          description: "New In Chess is a well-established publisher specializing in chess literature, producing books, magazines, and digital content for chess enthusiasts worldwide."
      },
      {
          name: "Quality Chess",
          description: "Quality Chess is known for its commitment to excellence in chess publishing, offering books authored by top players and renowned experts, covering all aspects of the game."
      },
      {
          name: "Gambit Publications",
          description: "Gambit Publications is a respected publisher of chess books, known for its diverse catalog catering to players of all levels, from beginners to grandmasters."
      },
      {
          name: "Chess Informant",
          description: "Chess Informant has a long history of publishing high-quality chess books and magazines, providing valuable insights, analysis, and annotated games to the chess community."
      },
      {
          name: "Thinkers Publishing",
          description: "Thinkers Publishing is dedicated to producing innovative and insightful chess books, authored by top players and trainers, covering a wide range of topics to enhance players' understanding and skills."
      },
      {
          name: "Russell Enterprises",
          description: "Russell Enterprises is a respected publisher of chess books, offering a diverse range of titles suitable for players of all levels, from beginners to advanced players."
      },
      {
          name: "Batsford Chess",
          description: "Batsford Chess is a well-known publisher of chess books, providing a comprehensive selection of titles covering various aspects of the game, including openings, tactics, strategy, and more."
      },
      {
          name: "Mongoose Press",
          description: "Mongoose Press is committed to producing high-quality chess books that cater to players of all levels, featuring insightful analysis, instructive content, and engaging writing."
      },
      {
          name: "Chess Evolution",
          description: "Chess Evolution is dedicated to publishing cutting-edge chess books, authored by top players and experts, focusing on the latest developments, strategies, and techniques in the game."
      }
  ];

    this.publishers = chessPublishers.map(publisher => ({id: faker.string.uuid(), ...publisher}))
  }

  async create(data) {
    const newPublisher = {
      id: faker.string.uuid(),
      ...data
    }
    this.publishers.push(newPublisher);
    return newPublisher;
  }

  async find() {
    return this.publishers;
  }

  async findOne(id) {
    const publisher = this.publishers.find(publisher => publisher.id === id);
    if(!publisher){
      throw boom.notFound('publisher Not Found');
    }
    return publisher;
  }

  async update(id, updatedData) {
    const index = this.publishers.findIndex(publisher => publisher.id === id);
    if(index === -1){
      throw boom.notFound('Publisher not found');
    }
    const publisher = this.publishers[index];
    this.publishers[index] = {
      ...publisher,
      ...updatedData
    }
    return this.publishers[index]
  }

  async delete(id) {
    const index = this.publishers.findIndex(publisher => publisher.id === id);
    if(index === -1){
      throw boom.notFound('Publisher not found');
    }
    this.publishers.splice(index, 1);
    return { id };
  }
}

module.exports = PublisherService;
