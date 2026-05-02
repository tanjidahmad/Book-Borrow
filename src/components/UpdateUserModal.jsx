// // "use client";

// // import { authClient } from "@/lib/auth-client";
// // import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
// // import { BiEdit, BiUser } from "react-icons/bi";

// // export function UpdateUserModal() {
// //   const onSubmit = async (e) => {
// //     e.preventDefault();
// //     const name = e.target.name.value;
// //     const image = e.target.image.value;

// //     consol.log({name,image})

// //     await authClient.updateUser({
// //         name,
// //         image
// //     })
// //     console.log(await authClient.updateUser({ name, image }));

    
// //   };
// //   return (
// //     <Modal>
// //       <Button variant="secondary">
// //         <BiEdit /> Update Profile
// //       </Button>
// //       <Modal.Backdrop>
// //         <Modal.Container placement="auto">
// //           <Modal.Dialog className="sm:max-w-md">
// //             <Modal.CloseTrigger />
// //             <Modal.Header>
// //               <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
// //                 <BiUser className="size-5" />
// //               </Modal.Icon>
// //               <Modal.Heading>Update User</Modal.Heading>
// //             </Modal.Header>
// //             <Modal.Body className="p-6">
// //               <Surface variant="default">
// //                 <form onSubmit={onSubmit} className="flex flex-col gap-4">
// //                   <TextField className="w-full" name="name" type="text">
// //                     <Label>Name</Label>
// //                     <Input placeholder="Enter your name" />
// //                   </TextField>
// //                   <TextField className="w-full" name="image" type="url">
// //                     <Label>Image URL</Label>
// //                     <Input placeholder="Image URL" />
// //                   </TextField>

// //                   <Modal.Footer>
// //                     <Button slot="close" variant="secondary">
// //                       Cancel
// //                     </Button>
// //                     <Button type="submit" slot="close">Save</Button>
// //                   </Modal.Footer>
// //                 </form>
// //               </Surface>
// //             </Modal.Body>
// //           </Modal.Dialog>
// //         </Modal.Container>
// //       </Modal.Backdrop>
// //     </Modal>
// //   );
// // }
// "use client";

// import { useState } from "react";
// import { authClient } from "@/lib/auth-client";
// import {
//   Button,
//   Input,
//   Label,
//   Modal,
//   Surface,
//   TextField,
// } from "@heroui/react";
// import { BiEdit, BiUser } from "react-icons/bi";

// export function UpdateUserModal({ userData }) {
//   const [open, setOpen] = useState(false);

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     const name = e.target.name.value;
//     const image = e.target.image.value;

//     console.log("Name:", name);
//     console.log("Image:", image);

//     const res = await authClient.updateUser({ name, image });
//     console.log("Response:", res);

//     // UI update
//     userData.refetch();

//     // modal close
//     setOpen(false);
//   };

//   return (
//     <Modal open={open} onOpenChange={setOpen}>
//       {/* Open Button */}
//       <Button onClick={() => setOpen(true)} variant="secondary">
//         <BiEdit /> Update Profile
//       </Button>

//       <Modal.Backdrop>
//         <Modal.Container placement="auto">
//           <Modal.Dialog className="sm:max-w-md">
//             <Modal.Header>
//               <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
//                 <BiUser className="size-5" />
//               </Modal.Icon>
//               <Modal.Heading>Update User</Modal.Heading>
//             </Modal.Header>

//             <Modal.Body className="p-6">
//               <Surface>
//                 <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  
//                   {/* Name */}
//                   <TextField>
//                     <Label>Name</Label>
//                     <Input name="name" placeholder="Enter your name" />
//                   </TextField>

//                   {/* Image */}
//                   <TextField>
//                     <Label>Image URL</Label>
//                     <Input name="image" placeholder="Image URL" />
//                   </TextField>

//                   <Modal.Footer>
//                     <Button
//                       variant="secondary"
//                       onClick={() => setOpen(false)}
//                     >
//                       Cancel
//                     </Button>

//                     {/* 🔥 NO slot="close" এখানে */}
//                     <Button type="submit"   >Save</Button>
//                   </Modal.Footer>
//                 </form>
//               </Surface>
//             </Modal.Body>
//           </Modal.Dialog>
//         </Modal.Container>
//       </Modal.Backdrop>
//     </Modal>
//   );
// }

"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";

export function UpdateUserModal({ userData }) {
  const [open, setOpen] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    const res = await authClient.updateUser({ name, image });
    console.log("Response:", res);

    if (res?.error) return;

    // UI update
    userData.refetch();

    // 🔥 modal close (guaranteed)
    setTimeout(() => {
      setOpen(false);
    }, 100);
  };

  return (
    <Modal open={open} onOpenChange={(v) => setOpen(v)}>
      {/* Open Button */}
      <Button onClick={() => setOpen(true)} variant="secondary">
        <BiEdit /> Update Profile
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update User</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface>
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  
                  {/* Name */}
                  <TextField>
                    <Label>Name</Label>
                    <Input name="name" placeholder="Enter your name" />
                  </TextField>

                  {/* Image */}
                  <TextField>
                    <Label>Image URL</Label>
                    <Input name="image" placeholder="Image URL" />
                  </TextField>

                  <Modal.Footer>
                    {/* Cancel */}
                    <Button
                      variant="secondary"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </Button>

                    {/* Save */}
                    <Button type="submit">Save</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
