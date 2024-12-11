import Footer from "@/components/custom/layout/Footer";
import Header from "@/components/custom/layout/Header";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, Check, HelpCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { memberSchema } from "@/lib/schemas";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
const MemberPage = () => {
  const form = useForm<z.infer<typeof memberSchema>>({
    resolver: zodResolver(memberSchema),
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
      dob: new Date(),
      studentNumber: "",
      module: "",
      street: "",
      houseNumber: "",
      city: "",
      postalCode: "",
      email: "",
      phoneNumber: "",
    },
  });
  const onSubmit = (values: z.infer<typeof memberSchema>) => {
    console.log(values);
  };
  return (
    <div className="md:container max-sm:mx-auto max-sm:max-w-[95vw] max-sm:px-2">
      <Header />
      <section className="mb-10 flex flex-col gap-16 md:flex-row">
        <section className="h-fit rounded-2xl bg-syntax/5 p-4 max-sm:max-w-[95vw] md:max-w-[40vw] md:p-10 xl:max-w-[25vw]">
          <article className="">
            <h1 className="text-5xl font-bold text-syntax max-sm:mb-2 md:text-6xl">
              Lid worden
            </h1>
            <img
              src="/src/assets/bungalan.webp"
              alt=""
              className="mx-auto my-10 hidden w-full rounded-xl md:block"
            />
            <h2 className="text-2xl font-semibold">Voordelen van Lid zijn</h2>
            <ul className="mt-5 flex flex-col gap-4">
              <li className="flex gap-2">
                <span className="font-bold text-syntax">
                  <Check />
                </span>
                IT-evenementen, gastcolleges, workshops en bedrijfsbezoeken
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-syntax">
                  <Check />
                </span>
                feedback geven over de opleiding
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-syntax">
                  <Check />
                </span>
                Gezelligheid in de vorm van onder andere borrels, feesten, LAN
                party's
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-syntax">
                  <Check />
                </span>
                Je komt in contact met enthousiaste en professionele IT-ers.{" "}
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-syntax">
                  <Check />
                </span>
                We helpen leden in contact te komen met (stage)bedrijven.{" "}
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-syntax">
                  <Check />
                </span>{" "}
                Studiehulp bij probleemvakken
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-syntax">
                  <Check />
                </span>
                De jaarlijkse Studiereis
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-syntax">
                  <Check />
                </span>
                Het Syntax Eerstejaars Weekend
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-syntax">
                  <Check />
                </span>{" "}
                Het kost maar €13,37 per jaar!{" "}
              </li>
            </ul>
          </article>
        </section>
        <section>
          <h2 className="text-4xl font-semibold">Inschrijven</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <section className="mt-8 justify-between md:flex">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Voornaam</FormLabel>
                      <FormControl>
                        <Input placeholder="voornaam" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="middleName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tussenvoegsels</FormLabel>
                      <FormControl>
                        <Input placeholder="tussenvoegsels" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </section>
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Achternaam</FormLabel>
                    <FormControl>
                      <Input placeholder="achternaam" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Geslacht</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Geslacht kiezen" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="man">Man</SelectItem>
                        <SelectItem value="vrouw">Vrouw</SelectItem>
                        <SelectItem value="anders">Anders</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <section className="items-center gap-x-8 align-top md:flex">
                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Geboortedatum</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Selecteer een datum</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="studentNumber"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="m-0">Student nummer</FormLabel>
                      <FormControl className="m-0">
                        <Input
                          {...field}
                          startAdornment={<p className="font-bold">S</p>}
                          placeholder="Studentnummer"
                          endAdornment={
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <HelpCircle className="h-4 w-4 cursor-pointer" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Je hogeschool leiden studenten nummer</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </section>
              <FormField
                control={form.control}
                name="module"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Afstudeerrichting</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Afstudeerrichting" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="man">IAT / Media Tech</SelectItem>
                        <SelectItem value="vrouw">
                          Software Engineering
                        </SelectItem>
                        <SelectItem value="anders">Forensisch ICT</SelectItem>
                        <SelectItem value="anders">
                          BDAM / Business IT{" "}
                        </SelectItem>
                        <SelectItem value="anders">Propedeuse</SelectItem>
                        <SelectItem value="anders">Geen / Anders</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Straat</FormLabel>
                    <FormControl>
                      <Input placeholder="Straat" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <section className="mt-8 md:flex md:justify-between">
                <FormField
                  control={form.control}
                  name="houseNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Huisnummer</FormLabel>
                      <FormControl>
                        <Input placeholder="Huisnummer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="postalCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Postcode</FormLabel>
                      <FormControl>
                        <Input placeholder="Postcode" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </section>
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Woonplaats</FormLabel>
                    <FormControl>
                      <Input placeholder="Woonplaats" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefoonnummer</FormLabel>
                    <FormControl>
                      <Input placeholder="Telefoonnummer" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="bg-syntax font-semibold">
                Inschrijven
              </Button>
            </form>
          </Form>
        </section>
      </section>
      <Footer />
    </div>
  );
};
export default MemberPage;
