import { describe, expect, it } from 'vitest';
import request from 'supertest';
import app from './app';

describe('GET /', () => {
    it('returns a hello world message', async () => {
        const response = await request(app).get('/');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'hello world' });
    });
});

describe('GET /home', () => {
    it('returns a hello world message', async () => {
        const response = await request(app).get('/home');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'hello world' });
    });
});
