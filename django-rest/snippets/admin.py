from django.contrib import admin

# Register your models here.

from . models import Snippet

admin.site.register(Snippet)

class SnippetAdmin(admin.ModelAdmin):
    readonly_fields = ('highlighted',)


#admin.site.register(Snippet, SnippetAdmin)
#admin.site.register(SnippetAdmin)