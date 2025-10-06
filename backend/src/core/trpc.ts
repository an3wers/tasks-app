import { initTRPC } from '@trpc/server'
import type { AppContext } from './context.ts'

const t = initTRPC.context<AppContext>().create()

export const router = t.router

export const publicProcedure = t.procedure

// // Middleware to check if user is authenticated
// const isAuthed = t.middleware(({ ctx, next }) => {
//   if (!ctx.userId) {
//     throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Not authenticated' });
//   }
//   return next({
//     ctx: {
//       ...ctx,
//       userId: ctx.userId,
//     },
//   });
// });

// export const protectedProcedure = t.procedure.use(isAuthed);
