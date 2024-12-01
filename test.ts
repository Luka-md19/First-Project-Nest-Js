import * as request from 'supertest';

import {
  completeUser,
  misingFirstName,
  missingEmail,
  missingPassword,
} from './users.post.e2e-spec.sample-data';

import { App } from 'supertest/types';
import { ConfigService } from '@nestjs/config';
import { INestApplication } from '@nestjs/common';
import { bootstrapNestApplication } from 'test/helpers/bootstrap-nest-application.helper';
import { dropDatabase } from 'test/helpers/drop-database.helper';
describe('[Users] @Post Endpoints', () => {
  let app: INestApplication;
  let config: ConfigService;
  let httpServer: App;

  beforeEach(async () => {
    // instincitae the app
    app = await bootstrapNestApplication();
    // get the config
    config = app.get<ConfigService>(ConfigService);
    // get server endpoint
    httpServer = app.getHttpServer();
  });
  afterEach(async () => {
    await dropDatabase(config);
    await app.close();
  });
  it('/users - Endpoint is public ,', () => {
    return request(httpServer).post('/users').send({}).expect(400);
  });
  it('/users - first name is mandatory ,', () => {
    return request(httpServer)
      .post('/users')
      .send({ misingFirstName })
      .expect(400);
  });
  it('/users - email is mandatory ,', () => {
    return request(httpServer)
      .post('/users')
      .send({ missingEmail })
      .expect(400);
  });
  it('/users - password is mandatory ,', () => {
    return request(httpServer)
      .post('/users')
      .send({ missingPassword })
      .expect(400);
  });
  it('/users - Valid request successfully creates user', () => {
    return request(httpServer)
      .post('/users')
      .send(completeUser)
      .expect(201)
      .then(({ body }) => {
        expect(body.data).toBeDefined();
        expect(body.data.firstName).toBe(completeUser.firstName);
        expect(body.data.lastName).toBe(completeUser.lastName);
        expect(body.data.email).toBe(completeUser.email);
      });
  });
  it('/users - password is not reutned in resposne', () => {
    return request(httpServer)
      .post('/users')
      .send(completeUser)
      .expect(201)
      .then(({ body }) => {
        expect(body.data.password).toBeUndefined();
      });
  });
  it('/users - googleId is not reurned in the response ', () => {
    return request(httpServer)
      .post('/users')
      .send(completeUser)
      .expect(201)
      .then(({ body }) => {
        expect(body.data).toBeDefined();
        expect(body.data.googleId).toBeUndefined();
      });
  });
});
