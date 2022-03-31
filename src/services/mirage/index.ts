import { createServer, Factory, Model } from 'miragejs';
import faker from 'faker';

type User = {
    name: string;
    email: string;
    created_at: string;
}

export function makeServer() {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({})
        },

        factories: {
            user: Factory.extend({
                name(index: number) {
                    return `User ${index + 1}`
                },
                email() {
                    return faker.internet.email().toLowerCase();
                },
                createdAt() {
                    return faker.date.recent();
                }
            })
        },

        seeds(server) {
            server.createList('user', 200);
        },
        
        routes() {
            //Usar esse namespace quando estiver usando NextJs para não colidir com o page/api dele.
            this.namespace = 'api';

            //Delay para simular experiência real de loading para o usuário
            this.timing = 750;

            this.get('/users');
            this.post('/users');

            this.namespace = '';
            this.passthrough()
        }
    })

    return server;
}
