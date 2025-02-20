const { faker } = require('@faker-js/faker');

class Document {
    constructor() {
        this.ID = faker.string.uuid();
        this.CreatedAt = faker.date.past().toISOString();
        this.UpdatedAt = faker.date.recent().toISOString();
        this.Title = faker.commerce.productName() + ' Beer';
        this.Version = faker.system.semver();
        this.Attachments = Array.from(
            { length: faker.number.int({ min: 1, max: 4 }) },
            () => faker.commerce.productAdjective()
        );
        this.Contributors = Array.from(
            { length: faker.number.int({ min: 1, max: 3 }) },
            () => ({
                ID: faker.string.uuid(),
                Name: faker.person.fullName()
            })
        );
    }
}

class NotificationMessage {
    constructor(document = null) {
        this.Timestamp = new Date().toISOString();
        this.UserID = faker.string.uuid();
        this.UserName = faker.person.fullName();

        this.DocumentID = document instanceof Document ? document.ID : faker.string.uuid();
        this.DocumentTitle = document instanceof Document ? document.Title : faker.commerce.productName();
    }
}

module.exports = { Document, NotificationMessage };
