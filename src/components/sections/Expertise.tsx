import { Card, CardContent } from '@/components/ui/Card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs'
import { Badge } from '@/components/ui/Badge'
import { specializations, technologyStack } from '@/lib/conts'

export const Expertise = () => {
  return (
    <section id="expertise" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Expertise & Core Technologies
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I architect and develop full-stack solutions that deliver measurable
            business impact. My approach combines frontend excellence with
            robust backend systems, focusing on performance optimization,
            scalable architecture, and team leadership. {"I've"} consistently
            delivered projects that improve load times by 30-70%, enhance API
            performance, and increase user engagement across multiple platforms.
          </p>
        </div>

        {/* Key Specializations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {specializations.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <item.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Technology Stack
          </h3>
          <Tabs defaultValue="Frontend" className="w-full">
            <TabsList
              className="grid w-full grid-cols-3 lg:grid-cols-6"
              defaultValue="Frontend"
            >
              {Object.keys(technologyStack).map(key => (
                <TabsTrigger key={key} value={key}>
                  {key}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(technologyStack).map(([key, value]) => (
              <TabsContent value={key} className="mt-6" key={value[0]}>
                <div className="flex flex-wrap gap-2">
                  {value.map(tech => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-sm py-2 px-3"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
