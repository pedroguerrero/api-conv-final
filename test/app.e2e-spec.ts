import request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());

    await app.init();
  });

  describe('ToBinary', () => {
    it('/tobinary (POST) 201', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      return request(app.getHttpServer())
        .post('/tobinary')
        .send({
          data: {
            decimal: 13,
          },
        })
        .expect(HttpStatus.CREATED)
        .expect({
          data: {
            value: 1101,
          },
        });
    });

    it('/tobinary (POST) 400', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      return request(app.getHttpServer())
        .post('/tobinary')
        .send({
          data: {
            decimal: 'asdasd',
          },
        })
        .expect(HttpStatus.BAD_REQUEST)
        .expect({
          statusCode: 400,
          message: [
            'data.decimal must be a number conforming to the specified constraints',
          ],
          error: 'Bad Request',
        });
    });
  });

  describe('ToDecimal', () => {
    it('/todecimal (POST) 201', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      return request(app.getHttpServer())
        .post('/todecimal')
        .send({
          data: {
            binary: 1101,
          },
        })
        .expect(HttpStatus.CREATED)
        .expect({
          data: {
            value: 13,
          },
        });
    });

    it('/todecimal (POST) 400', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      return request(app.getHttpServer())
        .post('/todecimal')
        .send({
          data: {
            binary: 'invalid',
          },
        })
        .expect(HttpStatus.BAD_REQUEST)
        .expect({
          statusCode: 400,
          message: [
            'data.binary must be a number conforming to the specified constraints',
          ],
          error: 'Bad Request',
        });
    });
  });
});
