// import { router, publicProcedure} from "../trpc";
// import { z } from "zod";

// export const exampleRouter = router
//     .merge("example", {
//         hello: publicProcedure
//             .input(z.object({ text: z.string() }))
//             .query(({ input }) => {
//                 return {
//                     greeting: `Hello ${input.text}`,
//                 };
//             }
//         ),
//         getAll: publicProcedure.query(({ ctx }) => {
//             return ctx.prisma.example.findMany();
//         }
//     )
//     }
// );

// // Path: src\server\api\trpc\index.ts
